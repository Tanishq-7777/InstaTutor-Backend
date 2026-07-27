const express = require("express");
const connectDB = require("../db/db");
const authRouter = require("./routers/auth");
const app = express();
app.use(express.json());
app.use("/auth", authRouter);
connectDB().then(() => {
  console.log("DataBase connected");
  app.listen("9999", (req, res) => {
    console.log("server listening at port 9999");
  });
});
