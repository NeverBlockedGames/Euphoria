// uv.bundle.js

// Ultraviolet (UV) object initialization
const Ultraviolet = {
  codec: {
    base64: {
      // Base64 encoding for URL
      encode: function (url) {
        return btoa(url); // Convert to base64 to make it URL-safe
      },

      // Base64 decoding for URL
      decode: function (encodedUrl) {
        return atob(encodedUrl); // Decode base64 to retrieve the original URL
      },
    },
  },
};

// UV Proxy configuration object
self.__uv$config = {
  prefix: '/uv/service/',  // Set prefix for proxy URL path
  bare: '/bare/',          // Set path to Bare server
  encodeUrl: Ultraviolet.codec.base64.encode,  // Set encoding function to Base64
  decodeUrl: Ultraviolet.codec.base64.decode,  // Set decoding function to Base64
  handler: '/uv/uv.handler.js',  // Path to UV handler script
  client: '/uv/uv.sw.js',        // Path to UV service worker script
  bundle: '/uv/uv.bundle.js',    // Path to this bundle script
  config: '/uv/uv.config.js',    // Path to UV config script
  sw: '/uv/uv.sw.js',            // Path to service worker script
};
