const filesToCache = [
  "/",
  "styles/global_styles.css",
  "styles/favorite_jokes.css",
  "assets/images/chuck_karate.jpg",
  "assets/images/chuck_texas.jpg",
  "assets/images/chuck_uzi.jpg",
  "index.html",
  "pages/404.html",
  "pages/favorite_jokes.html",
  "pages/login.html",
  "pages/signup.html",
  "pages/offline.html"
];

const staticCacheName = "vanilla-chuck-pages-cache-v7.0.1";

self.addEventListener("install", event => {
  self.skipWaiting();
  console.log("Attempting to install service worker and cache static assets");
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  console.log("Fetch event for ", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        if (response) {
          console.log("Found ", event.request.url, " in cache");
          return response;
        }
        console.log("Network request for ", event.request.url);
        return fetch(event.request).then(response => {
          if (response.status === 404) {
            return caches.match("pages/404.html");
          }
          return caches.open(staticCacheName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
      .catch(error => {
        console.log("Error, ", error);
        return caches.match("pages/offline.html");
      })
  );
});

self.addEventListener("activate", event => {
  console.log("Activating new service worker...");

  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
