// Import the handleRequest function from the uv.bundle.js file
import handleRequest from './uv/uv.bundle.js';

// Create a cache to store responses from the proxy
const cache = new Cache('proxy-cache');

// Define the fetch event handler
self.addEventListener('fetch', (event) => {
  // Check if the request is for the proxy
  if (event.request.url.includes('/uv/service/')) {
    // Handle the request using the handleRequest function
    event.respondWith(handleRequest(event.request));
  } else {
    // If the request is not for the proxy, use the default fetch behavior
    event.respondWith(fetch(event.request));
  }
});

// Define the activate event handler
self.addEventListener('activate', (event) => {
  // Activate the service worker and clear any old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== 'proxy-cache').map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});
