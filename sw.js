const CACHE_NAME = 'trade-matrix-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through so the browser sees an active worker
  event.respondWith(fetch(event.request));
});