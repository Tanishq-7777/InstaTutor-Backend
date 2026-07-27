const express = require("express");
const connectDB = require("../db/db");
const app = express();

app.use("/", (req, res) => {
  res.send("hey");
});

connectDB().then(() => {
  console.log("DataBase connected");
  app.listen("9999", (req, res) => {
    console.log("server listening at port 9999");
  });
});
