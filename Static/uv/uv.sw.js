// uv.sw.js
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error('Error fetching resource:', error);
        return new Response('Error fetching resource', { status: 500 });
      })
  );
});