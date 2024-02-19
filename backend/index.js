const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 6500;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the IOT Server !");
});

app.post("/save-service-worker", async (req, res) => {
//   const body = await req.body;
  res.status(200).send("SW Saved in the DB");
  // save in the DB
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
