const express = require("express");
const cors = require("cors");
const path = require("path");

const eskuls = require("./data/eskuls");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

// Folder gambar
app.use(
  "/images",
  express.static(path.join(__dirname, "public/images"))
);

app.get("/", (req, res) => {
  res.send("Backend jalan");
});

app.get("/eskuls", (req, res) => {
  res.json(eskuls);
});

module.exports = app;