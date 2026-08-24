const CACHE_NAME = "study-deck-cache-v80";
const APP_SHELL = [
  "./",
  "./index.html",
  "./tmp_script.js?v=20260824-1450-b",
  "https://cdn.jsdelivr.net/npm/ts-fsrs@5.4.1/dist/index.umd.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js",
  "./manifest.json",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-192.png",
  "./icon-maskable-512.png",
];
self.addEventListener("install", (event) => {
  /* addAll() est atomique : une seule URL en échec fait échouer l'installation
     entière. Or APP_SHELL fige la version de tmp_script.js, que deploy.sh
     resynchronise par substitution ; si ce bump rate, le service worker
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
/* Deux régimes, selon que l'URL désigne une version ou la porte.

   index.html et sw.js sont les seuls fichiers qui pointent vers la version
   courante : ils doivent venir du réseau, sinon un déploiement ne serait jamais vu.
   Firebase leur envoie déjà `no-cache`, la logique d'ici s'y accorde.

   Tout le reste porte sa version dans l'URL, donc la copie en cache est
   prouvablement identique à celle du réseau : la redemander ne peut rien apprendre.
   Le réseau d'abord coûtait une attente à chaque lancement, et surtout, sur une
   connexion faible mais non rompue, fetch ne rejette pas, il traîne : aucun repli ne
   se déclenchait et l'écran restait blanc. */
const estPointeurDeVersion = (request, url) =>
  request.mode === "navigate" ||
  url.pathname === "/" ||
  url.pathname.endsWith("/index.html") ||
  url.pathname.endsWith("/sw.js");

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);

  if (estPointeurDeVersion(event.request, url)) {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          /* On rafraîchit la copie à chaque passage réussi. Sans cela, index.html
             n'entrait dans le cache que par le précache de l'installation : si
             celui-ci échouait ou était interrompu, plus aucun chemin ne le
             stockait, et l'application ne démarrait tout simplement pas hors
             ligne. Le précache devenait un point de défaillance unique. */
          if (res && res.ok) {
            const copie = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, copie));
          }
          return res;
        })
        .catch(() =>
          caches
            .match(event.request)
            .then((res) => res || caches.match("./index.html")),
        ),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((res) => {
          /* Soigne ce que le précache avait manqué : ses échecs sont tolérés entrée
             par entrée, donc une ressource peut manquer sans que rien ne l'ait dit.
             On accepte les réponses opaques, seule forme disponible pour les
             scripts servis par un autre domaine. */
          if (res && (res.ok || res.type === "opaque")) {
            const copie = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, copie));
          }
          return res;
        })
        /* Pas de repli sur index.html ici : renvoyer du HTML là où un script est
           attendu produit une erreur de syntaxe au lieu d'un échec propre. */
        .catch(() => Response.error());
    }),
  );
});
