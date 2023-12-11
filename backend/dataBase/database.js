/* eslint-disable no-undef */
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yashunhawane:uI9ofZadf08ZtqDF@cluster0.zrasmex.mongodb.net/cources"
    );
    console.log(`\n MongoDB connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
