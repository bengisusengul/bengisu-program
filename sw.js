// Bengisu Program · Service Worker (Phase 3.B-A)
// Görev: PWA install + offline cache + (gelecek) push notification

const CACHE_NAME = 'bengisu-v3-2026-05-10';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './bg.jpeg'
];

// ── Install: ana asset'leri cache'le
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// ── Activate: eski cache versiyonlarını temizle
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── Fetch: network-first, fallback cache (cache-first sadece bg.jpeg için)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // External (Anthropic API, YouTube, vb.) → network only, cache yok
  if (url.origin !== self.location.origin) {
    return;
  }

  // bg.jpeg ve manifest.json → cache-first (büyük asset, değişmez)
  if (url.pathname.endsWith('bg.jpeg') || url.pathname.endsWith('manifest.json')) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
    return;
  }

  // index.html / app shell → network-first (yeni deploy'ları yakala),
  // network başarısızsa cache fallback (offline access)
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        // Başarılı response'u cache'e güncelle
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});

// ── Push event handler (server endpoint olduğunda kullanılacak — şu an placeholder)
self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: 'Bengisu Program', body: event.data ? event.data.text() : '' };
  }
  const title = data.title || 'Bengisu Program';
  const options = {
    body: data.body || '',
    icon: data.icon || './bg.jpeg',
    badge: data.badge || './bg.jpeg',
    tag: data.tag || 'reminder',
    data: data.data || {},
    silent: false
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// ── Notification click → ana sayfayı aç
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      for (const client of clients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('./');
      }
    })
  );
});
