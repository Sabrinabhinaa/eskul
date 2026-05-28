const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

const eskuls = require("./data/eskuls");

// API
app.get("/eskuls", (req, res) => {
  res.json(eskuls);
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});