/* eslint-disable no-undef */
//const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const port = 3000;
const { data } = require("./data");
const bodyParser = require("body-parser");
const connectDB = require("./dataBase/database");
const  User  = require("./dataBase/userModels.js");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send(data);
});

app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  res.json(data[id]);
});

app.post("/createCource", (req, res) => {
  const { title, url, description, price } = req.body;
  console.log("Received course data:", { title, url, description, price });
  res.status(200).json({ message: "Course created successfully" });
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();
    console.log("User added successfully:", newUser);
    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
