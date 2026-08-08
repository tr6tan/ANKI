const CACHE_NAME = "study-deck-cache-v57";
const APP_SHELL = [
  "./",
  "./index.html",
  "./tmp_script.js?v=20260808-1122",
  "./manifest.json",
  "./apple-touch-icon-v3.png",
  "./icon-192-v36.png",
  "./icon-512-v36.png",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  );
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).catch(() =>
      caches
        .match(event.request)
        .then((res) => res || caches.match("./index.html")),
    ),
  );
});
