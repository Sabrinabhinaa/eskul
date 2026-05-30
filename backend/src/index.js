const express = require("express");
const cors = require("cors");

const eskuls = require("./data/eskuls");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend jalan");
});

app.get("/eskuls", (req, res) => {
  res.json(eskuls);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});