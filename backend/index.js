/* eslint-disable no-undef */
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const { data } = require("./data");

//
app.use(cors());
app.use(express.json());

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
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
