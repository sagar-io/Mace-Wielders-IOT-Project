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

// Push Notification -
self.addEventListener("push", (event) => {
  const data = event.data.json();
  const title = data.title;
  const body = data.message;
  const icon = "./images/notification.svg";
  const options = {
    body,
    tag: "Push Notification",
    icon,
  };
  return self.Notification.requestPermission().then((permission) => {
    if (permission == "granted") {
      return new self.Notification(title, options);
    }
  });
});

// Public Key:
// BDOuJMIbGFKauh2wWg1N7o9UstO-RG94-WSRBllNjNBCAL-t6BNJFIePmsL_ptgQqscIdBydhXGCtlrxDTas3Dc

// Private Key:
// a8q-N6vJTa6hD2tkhDXKopxm_A9IqXo0BsS7nvQcacA
