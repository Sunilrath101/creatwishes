require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

const dbConnected = async () => {
  try {
    const response = await mongoose.connect(DB);
    console.log("DB is Connected!");
  } catch (err) {
    console.log("There is eroor in DB", err);
  }
};

module.exports = dbConnected;
