// Push Service Registration -

const applicationServerKey = urlBase64ToUint8Array(
  "BDOuJMIbGFKauh2wWg1N7o9UstO-RG94-WSRBllNjNBCAL-t6BNJFIePmsL_ptgQqscIdBydhXGCtlrxDTas3Dc"
);

self.addEventListener("activate", async (event) => {
  console.log("activation event triggered");
  const subscription = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey,
  });
  console.log(subscription);
  await saveSubscription(subscription);
  console.log("activation event completed");
});

async function saveSubscription(subscription) {
  // next syntax for api call
  try {
    const response = await fetch(
      "https://pwa-backend-9sqn.onrender.com/save-service-worker",
      {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(subscription),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

// Push Notification -
self.addEventListener("push", (event) => {
  try {
    console.log(event.data.text());
    self.registration.showNotification("Wohoo!!", {
      body: event.data.text(),
      icon: "./images/notification.svg",
      tag: "Push Notification",
    });
  } catch (error) {
    console.log("ERROR While showing the notification", error);
  }

  // const data = event.data.json();
  // const title = data.title;
  // const body = data.message;
  // const icon = "./images/notification.svg";
  // const options = {
  //   body,
  //   tag: "Push Notification",
  //   icon,
  // };
  // return self.Notification.requestPermission().then((permission) => {
  //   if (permission == "granted") {
  //     return new self.Notification(title, options);
  //   }
  // });
});

// Caching -
const cacheClone = async (e) => {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open("cachedAssets");
  await cache.put(e.request, resClone);
  return res;
};

const fetchEvent = () => {
  self.addEventListener("fetch", (e) => {
    e.respondWith(
      cacheClone(e)
        .catch(() => caches.match(e.request))
        .then((res) => res)
    );
  });
};

fetchEvent();

// Utility -
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}
