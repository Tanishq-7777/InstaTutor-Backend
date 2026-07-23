const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("hey");
});

app.listen(9999, () => {
  console.log("server lsitening at PORT -> 9999");
});
