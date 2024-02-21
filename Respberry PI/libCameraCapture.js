const {libcamera} = require('libcamera')

async function captureAndSave() {
try {
const result = await libcamera
.jpeg({ config: { output: './images/live-img.jpg' } })
}catch(error) {
  console.log("Error occured in the libcamera captureAndSave function", error);
}
}
module.exports = {captureAndSave};
