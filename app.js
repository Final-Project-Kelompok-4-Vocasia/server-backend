const express = require("express");
const routers = require("./routes/index");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Backend Final Project Vocasia - Kelompok 4</h1>");
});

app.use(routers);
app.use(cors());

app.listen(port, () => {
  console.log(`Started server at on port ${port}`);
});
