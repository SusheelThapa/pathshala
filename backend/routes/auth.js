const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");

const { checkRole } = require("../utils/checkPermission")

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) return res.status(400).send("Invalid username or password.");

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword)
        return res.status(400).send("Invalid username or password.");

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '86400s'
    });
    const role = await checkRole(username);
    res.send({ token ,role});
});

router.post("/register", async (req, res) => {
    try {
        const { username, password, firstName, lastName, email } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username,
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        const savedUser = await user.save();
        res.json({
            message: "User registered successfully",
            userId: savedUser._id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/users", async (req, res) => {
    const users = await User.find();

    for (let i = 0; i < users.length; i++) {
        const role = await checkRole(users[i].username); // Corrected property access
        users[i].role = role;
    }

    const usersWithRoles = users.map(user => ({
        username: user.username,
        role: user.role
    }));

    console.log(usersWithRoles);
    res.send(usersWithRoles);

})
module.exports = router;