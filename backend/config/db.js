require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DATABASE CONNECTION SUCCESS");
    } catch (error){
        console.error("DATABASE CONNECTION FAILED");
        process.exit(1);
    }
};

module.exports = connectDB;