// Offline support: serve the app shell from cache, refresh it in the background.
const CACHE = 'semester-desk-v2';
const SHELL = ['./', 'index.html', 'study-data.js', 'manifest.webmanifest', 'seed.json',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  // Study tab libraries (KaTeX, marked, DOMPurify) load from jsDelivr at fixed versions, so they never change: cache first.
  const isLib = url.hostname === 'cdn.jsdelivr.net' && /^\/npm\/(katex|marked|dompurify)@[\d.]+\//.test(url.pathname);
  if (isLib) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  if (!sameOrigin && !isFont) return; // never cache API calls
  // Network first for our own files so updates show up; fall back to cache offline.
  e.respondWith(fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : undefined))));
});
