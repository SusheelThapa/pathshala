const User = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const usersData = [
    { username: "susheelthapa", firstName: "susheel", lastName: "thapa", email: "susheelthapa90@gmail.com" },
    { username: "deltagroup", firstName: "delta", lastName: "group", email: "deltagroup@gmail.com" },
    { username: "betagroup", firstName: "beta", lastName: "group", email: "betagroup@gmail.com" },
    { username: "gaming", firstName: "gam", lastName: "ing", email: "gaming@gmail.com" },
    { username: "kontribution", firstName: "kontri", lastName: "bution", email: "kontribution@gmail.com" },
    { username: "hostel", firstName: "hos", lastName: "tel", email: "hostel@gmail.com" },
    { username: "general", firstName: "gene", lastName: "ral", email: "general@gmail.com" },
    { username: "sauravmahato", firstName: "Saurav", lastName: "Mahato", email: "sauravmahato@gmail.com" },
    { username: "rajendrakhanal", firstName: "Rajendra", lastName: "Khanal", email: "rajendrakhanal@gmail.com" },
];

async function populateData() {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        // Hash the password "Test@123"
        const hashedPassword = await bcrypt.hash("Test@123", 10);

        // Loop through the usersData array and save each user to the database
        for (const userData of usersData) {
            const user = new User({
                ...userData,
                password: hashedPassword,
            });
            await user.save();
        }

        console.log("Users have been populated successfully.");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error populating users:", error);
        mongoose.connection.close();
    }
}

populateData();