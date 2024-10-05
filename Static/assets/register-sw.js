// register-sw.js

// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/sw.js')  // Path to your service worker file (you'll need to create sw.js)
      .then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function (error) {
        console.log('Service Worker registration failed:', error);
      });
  });
} else {
  console.log('Service Worker is not supported in this browser.');
}
