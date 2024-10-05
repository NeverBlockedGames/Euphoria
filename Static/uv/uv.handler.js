import { handleRequest } from './uv.bundle.js';

// Event listener for fetch events (intercepts requests)
self.addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

// Function to handle the request (example logic)
async function handleRequest(request) {
  const url = new URL(request.url);
  

  const decodedUrl = __uv$config.decodeUrl(url.pathname.split('/uv/service/')[1]);

  return fetch(decodedUrl);
}
