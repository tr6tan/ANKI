const CACHE_NAME = "study-deck-cache-v65";
const APP_SHELL = [
  "./",
  "./index.html",
  "./tmp_script.js?v=20260816-1348",
  "https://cdn.jsdelivr.net/npm/ts-fsrs@5.4.1/dist/index.umd.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js",
  "./manifest.json",
  "./apple-touch-icon-v3.png",
  "./icon-192-v36.png",
  "./icon-512-v36.png",
];
self.addEventListener("install", (event) => {
  /* addAll() est atomique : une seule URL en échec fait échouer l'installation
     entière. Or APP_SHELL fige la version de tmp_script.js, que deploy.sh
     resynchronise par substitution — si ce bump rate, le service worker
     précache une URL morte et l'app perd son mode hors ligne sans rien
     signaler. Entrée par entrée, on garde tout ce qui répond. */
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.all(
          APP_SHELL.map((url) =>
            cache
              .add(url)
              .catch((err) => console.warn("[sw] précache ignoré :", url, err)),
          ),
        ),
      ),
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
