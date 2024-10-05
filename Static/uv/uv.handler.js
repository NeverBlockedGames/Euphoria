// uv.handler.js

// Ensure that Ultraviolet configuration exists
const Ultraviolet = {
  codec: {
    base64: {
      encode: (str) => btoa(str),
      decode: (str) => atob(str),
    },
  },
};

// The __uv$config object contains the proxy settings (ensure it's initialized)
const __uv$config = {
  prefix: '/uv/service/',
  decodeUrl: Ultraviolet.codec.base64.decode, // Base64 decoding method
};

// Event listener for fetch events (intercepts requests)
self.addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

// Function to handle the request (proxy logic)
async function handleRequest(request) {
  try {
    const url = new URL(request.url);
    
    // Extract the Base64-encoded part from the request URL
    const encodedUrlPart = url.pathname.split(__uv$config.prefix)[1];
    
    if (!encodedUrlPart) {
      return new Response('Invalid Request', { status: 400 });
    }

    // Decode the Base64-encoded URL
    const decodedUrl = __uv$config.decodeUrl(encodedUrlPart);

    // Make a request to the decoded URL
    return fetch(decodedUrl);
  } catch (error) {
    console.error('Error in handling request:', error);
    return new Response('Error in proxy handler', { status: 500 });
  }
}
