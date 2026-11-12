// Service worker simples: deixa o app instalável. Sempre busca a versão nova na rede (dados financeiros não ficam em cache).
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))
self.addEventListener('fetch', () => {})
