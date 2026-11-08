// Cambiá el número de versión cada vez que subas cambios a la app.
const CACHE = 'sellos-cilindro-v1';
const ASSETS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "vendor/jspdf.umd.min.js",
  "fonts/fonts.css",
  "fonts/big-shoulders-display-latin-600-normal.woff2",
  "fonts/big-shoulders-display-latin-800-normal.woff2",
  "fonts/ibm-plex-mono-latin-400-normal.woff2",
  "fonts/ibm-plex-mono-latin-500-normal.woff2",
  "fonts/ibm-plex-sans-latin-400-normal.woff2",
  "fonts/ibm-plex-sans-latin-500-normal.woff2",
  "fonts/ibm-plex-sans-latin-600-normal.woff2",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
// Responde desde el caché (funciona sin conexión) y actualiza en segundo plano cuando hay red.
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
    var red = fetch(e.request).then(function (res) {
      if (res && res.ok && new URL(e.request.url).origin === location.origin) {
        var copia = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copia); });
      }
      return res;
    }).catch(function () { return hit || caches.match('index.html'); });
    return hit || red;
  }));
});
