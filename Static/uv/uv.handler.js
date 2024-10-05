// uv.handler.js

// Ensure that Ultraviolet configuration exists
const Ultraviolet = {
  codec: {
    base64: {
      encode: (str) => btoa(str),  // Base64 encoding
      decode: (str) => atob(str),  // Base64 decoding
    },
  },
};

// The __uv$config object contains the proxy settings (ensure it's initialized)
const __uv$config = {
  prefix: '/uv/service/',          // Proxy path prefix
  decodeUrl: Ultraviolet.codec.base64.decode, // Base64 decoding method
};

// Register the fetch event listener to intercept requests
self.addEventListener('fetch', (event) => {
  console.log('Intercepting request:', event.request.url);
  event.respondWith(handleRequest(event.request));
});

// Function to handle the request (proxy logic)
async function handleRequest(request) {
  try {
    const url = new URL(request.url);  // Get the current request URL
    console.log('Full URL:', url);

    // Extract the Base64-encoded part from the request URL
    const encodedUrlPart = url.pathname.split(__uv$config.prefix)[1];
    console.log('Encoded URL Part:', encodedUrlPart);

    if (!encodedUrlPart) {
      return new Response('Invalid Request: No encoded URL part found', { status: 400 });
    }

    // Decode the Base64-encoded URL
    const decodedUrl = __uv$config.decodeUrl(encodedUrlPart);
    console.log('Decoded URL:', decodedUrl);

    // Make a fetch request to the decoded URL
    const response = await fetch(decodedUrl);
    console.log('Fetched response from decoded URL:', decodedUrl);
    return response;
    
  } catch (error) {
    console.error('Error in handling request:', error);
    return new Response('Error in proxy handler', { status: 500 });
  }
}
