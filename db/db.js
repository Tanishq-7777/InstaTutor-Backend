const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://TanishqSaxena:tani2007@moviespace.mj2nkz4.mongodb.net/InstaTutor",
  );
};

module.exports = connectDB;
