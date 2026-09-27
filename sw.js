// «مين الجاني؟» offline cache. Written by tools/build.py: the cache name changes with every build that changes a file.
const CACHE = 'qadaya-3fef770932fb';
const FILES = [
 "./",
 "index.html",
 "cases.js",
 "manifest.webmanifest",
 "fonts/ArefRuqaa-400-arabic.woff2",
 "fonts/ArefRuqaa-400-latin.woff2",
 "fonts/ArefRuqaa-700-arabic.woff2",
 "fonts/ArefRuqaa-700-latin.woff2",
 "fonts/IBMPlexSansArabic-400-arabic.woff2",
 "fonts/IBMPlexSansArabic-400-latin.woff2",
 "fonts/IBMPlexSansArabic-500-arabic.woff2",
 "fonts/IBMPlexSansArabic-500-latin.woff2",
 "fonts/IBMPlexSansArabic-600-arabic.woff2",
 "fonts/IBMPlexSansArabic-600-latin.woff2",
 "fonts/IBMPlexSansArabic-700-arabic.woff2",
 "fonts/IBMPlexSansArabic-700-latin.woff2",
 "fonts/NotoNaskhArabic-400-arabic.woff2",
 "fonts/NotoNaskhArabic-400-latin.woff2",
 "fonts/NotoNaskhArabic-500-arabic.woff2",
 "fonts/NotoNaskhArabic-500-latin.woff2",
 "fonts/NotoNaskhArabic-600-arabic.woff2",
 "fonts/NotoNaskhArabic-600-latin.woff2",
 "fonts/NotoNaskhArabic-700-arabic.woff2",
 "fonts/NotoNaskhArabic-700-latin.woff2",
 "fonts/fonts.css",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/maskable-192.png",
 "icons/maskable-512.png",
 "icons/apple-touch-icon.png"
];
const LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(self.location.hostname);
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('qadaya-') && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// cache first for the game's own files; never the room API, the online brokers (wss) or anything on another site
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.includes('/api/')) return;
  if (LOCAL) {  // on this computer (dev relay): the network first, so a fresh build shows at once; the cache only offline
    e.respondWith(fetch(req).then((res) => {
      if (res && res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req.mode === 'navigate' ? 'index.html' : req, copy)); }
      return res;
    }).catch(() => caches.open(CACHE).then((c) => c.match(req.mode === 'navigate' ? 'index.html' : req, { ignoreSearch: true }))));
    return;
  }
  if (req.mode === 'navigate') {  // the page itself, also with ?join=… links
    e.respondWith(caches.open(CACHE).then((c) => c.match('index.html')).then((r) => r || fetch(req)));
    return;
  }
  e.respondWith(caches.open(CACHE).then((c) => c.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
    if (res && res.ok && res.type === 'basic') c.put(req, res.clone());
    return res;
  }))));
});
