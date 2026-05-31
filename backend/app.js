const express = require("express");
const cors = require("cors");

const eskuls = require("./data/eskuls");

const app = express();

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Backend jalan");
});

app.get("/eskuls", (req, res) => {
  res.json(eskuls);
});

app.get("/eskuls/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const eskul = eskuls.find((item) => item.id === id);

  if (!eskul) {
    return res.status(404).json({ message: "Eskul tidak ditemukan" });
  }

  res.json(eskul);
});

module.exports = app;