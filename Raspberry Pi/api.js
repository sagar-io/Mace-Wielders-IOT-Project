const axios = require('axios');
async function sendNotification() {
  try {
   await axios.get("https://pwa-backend-9sqn.onrender.com/send-notification")	  
  } catch(error) { 
     console.log("Error occured in the sendNotification functin under api.js file", error);
}
}
module.exports = {sendNotification};
