// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then((registration) => {
      console.log('Service worker registered:', registration);
    })
    .catch((error) => {
      console.error('Error registering service worker:', error);
    });
}
