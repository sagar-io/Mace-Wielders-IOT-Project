const express = require("express");
const app = express();
const cors = require("cors");
const webPush = require("web-push");
// require("dotenv").config();

const PORT = 6200;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the IOT Server !");
});

console.log(process.env.PUBLIC_KEY);
webPush.setVapidDetails(
  "mailto:tech.sagarsh@gmail.com",
  process.env.PUBLIC_KEY,
  process.env.PRIVATE_KEY
);

const serviceWorkerDB = [];

app.post("/save-service-worker", async (req, res) => {
  serviceWorkerDB.push(req.body);
  const response = JSON.stringify("SW Saved in the DB");
  res.status(200).send(response);
});

app.get("/send-notification", async (req, res) => {
  console.log(serviceWorkerDB);
  webPush.sendNotification(
    serviceWorkerDB[serviceWorkerDB.length - 1],
    "Cow detected !"
  );
  res.json({ statue: "Success", message: "Message sent to push service" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
