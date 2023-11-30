/* eslint-disable no-undef */
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const { data } = require("./data");
const bodyParser = require("body-parser");

//
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//
app.get("/", (req, res) => {
  res.send(data);
});

//
app.get("/detail/:id", (req, res) => {
  const id = req.params.id;
  res.json(data[id]);
});

//

app.post("/createCource", (req, res) => {
  const { title, url, description, price } = req.body;
  console.log("Received course data:", { title, url, description, price });
  res.status(200).json({ message: "Course created successfully" });
});

//
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
