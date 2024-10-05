// register-sw.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/uv/uv.sw.js')
    .then(registration => {
      console.log('Service worker registered:', registration);
    })
    .catch(error => {
      console.error('Service worker registration failed:', error);
    });
} else {
  console.log('Service workers are not supported.');
}
