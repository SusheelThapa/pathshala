const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const authRoutes = require("./routes/auth");
const channelPostRoutes = require('./routes/channelPostRoutes');
const permissionRoutes = require("./routes/permissions")

const cors = require("cors"); // Import the CORS middleware
require("dotenv").config();

const app = express();
const PORT = 3001;

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });


app.use(morgan('combined'));
app.use(cors()); // Use CORS middleware to allow requests from the frontend
app.use(express.json());

app.use("/api/auth", authRoutes); // All the routes defined in auth.js will be prefixed with /api/auth
app.use("/api/channelpost", channelPostRoutes);
app.use("/api/permissions", permissionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});