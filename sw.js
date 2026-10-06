// «مين الجاني؟» offline cache. Written by tools/build.py: the cache name changes with every build that changes a file.
const CACHE = 'qadaya-f10487ab2b96';
const FILES = [
 "./",
 "index.html",
 "cases.js",
 "manifest.webmanifest",
 "cases_en.js",
 "snd.js",
 "amb.js",
 "fonts/Amiri-400-arabic.woff2",
 "fonts/Amiri-400-latin.woff2",
 "fonts/Amiri-700-arabic.woff2",
 "fonts/Amiri-700-latin.woff2",
 "fonts/ArefRuqaa-400-arabic.woff2",
 "fonts/ArefRuqaa-400-latin.woff2",
 "fonts/ArefRuqaa-700-arabic.woff2",
 "fonts/ArefRuqaa-700-latin.woff2",
 "fonts/Cairo-400-arabic.woff2",
 "fonts/Cairo-400-latin.woff2",
 "fonts/ElMessiri-400-arabic.woff2",
 "fonts/ElMessiri-400-latin.woff2",
 "fonts/IBMPlexSansArabic-400-arabic.woff2",
 "fonts/IBMPlexSansArabic-400-latin.woff2",
 "fonts/IBMPlexSansArabic-500-arabic.woff2",
 "fonts/IBMPlexSansArabic-500-latin.woff2",
 "fonts/IBMPlexSansArabic-600-arabic.woff2",
 "fonts/IBMPlexSansArabic-600-latin.woff2",
 "fonts/IBMPlexSansArabic-700-arabic.woff2",
 "fonts/IBMPlexSansArabic-700-latin.woff2",
 "fonts/Marhey-400-arabic.woff2",
 "fonts/Marhey-400-latin.woff2",
 "fonts/NotoNaskhArabic-400-arabic.woff2",
 "fonts/NotoNaskhArabic-400-latin.woff2",
 "fonts/Tajawal-400-arabic.woff2",
 "fonts/Tajawal-400-latin.woff2",
 "fonts/Tajawal-500-arabic.woff2",
 "fonts/Tajawal-500-latin.woff2",
 "fonts/Tajawal-700-arabic.woff2",
 "fonts/Tajawal-700-latin.woff2",
 "fonts/fonts.css",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/maskable-192.png",
 "icons/maskable-512.png",
 "icons/apple-touch-icon.png"
];
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
  // network first (asking the server whether the file changed), so a new build shows on the next open;
  // the cache only answers offline
  const key = req.mode === 'navigate' ? 'index.html' : req;
  e.respondWith(fetch(req, { cache: 'no-cache' }).then((res) => {
    if (res && res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(key, copy)); }
    return res;
  }).catch(() => caches.open(CACHE).then((c) => c.match(key, { ignoreSearch: true }))));
});
