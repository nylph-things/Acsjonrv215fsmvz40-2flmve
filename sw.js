// sw.js — Minimal service worker for PWA fullscreen
self.addEventListener('install', event => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // Just let all requests go through
  event.respondWith(fetch(event.request));
});
