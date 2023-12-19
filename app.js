const express = require("express");
const routers = require("./routes/index");
const cors = require("cors");
const errorHandling = require("./middlewares/errorHandling");

const app = express();
const port = 4004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Backend Final Project Vocasia - Kelompok 4</h1>");
});

app.use(routers);
app.use(errorHandling);
app.use(cors());

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}...`);
});
