const fs = require("fs");

require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const tf = require("@tensorflow/tfjs-node");
const cocoSsd = require("@tensorflow-models/coco-ssd");
const f = require("./libCameraCapture.js");
const api = require("./api.js");

async function loadModel() {
  model = await cocoSsd.load();
  return model;
}

async function predictObjects() {
  const model = await loadModel();
  console.log("Tensorflow.js Model Loaded...");
//  live logic
  setInterval(() => {
      handleCapture();
  }, 8000)
}

async function handleCapture() {
  await f.captureAndSave();
  const imageTensor = loadImage("./images/live-img.jpg");
  const predictions = await model.detect(imageTensor);

  predictions.forEach(async (prediction) => {
    const label = prediction["class"];
    console.log(label);
    if(label == "cat" || label == "cow" || label == "dog") {
      await api.sendNotification();
    }
  });
  imageTensor.dispose();
}

function loadImage(filePath) {
  const imageBuffer = fs.readFileSync(filePath);
  const tfImage = tf.node.decodeImage(imageBuffer);
  return tfImage;
}

predictObjects();

