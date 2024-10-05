// uv.bundle.js

// Ultraviolet (UV) object initialization
const Ultraviolet = {
  codec: {
    xor: {
      // XOR encoding for URL
      encode: function (url) {
        let output = '';
        for (let i = 0; i < url.length; i++) {
          output += String.fromCharCode(url.charCodeAt(i) ^ 0x12); // Simple XOR encoding
        }
        return btoa(output); // Convert to base64 to make it URL-safe
      },

      // XOR decoding for URL
      decode: function (encodedUrl) {
        let decodedBase64 = atob(encodedUrl); // Decode base64
        let output = '';
        for (let i = 0; i < decodedBase64.length; i++) {
          output += String.fromCharCode(decodedBase64.charCodeAt(i) ^ 0x12); // Reverse XOR encoding
        }
        return output;
      },
    },
  },
};

// UV Proxy configuration object
self.__uv$config = {
  prefix: '/UV/service/',  // Set prefix for proxy URL path
  bare: '/bare/',          // Set path to Bare server
  encodeUrl: Ultraviolet.codec.xor.encode,  // Set encoding function
  decodeUrl: Ultraviolet.codec.xor.decode,  // Set decoding function
  handler: '/UV/uv.handler.js',  // Path to UV handler script
  client: '/UV/uv.sw.js',        // Path to UV service worker script
  bundle: '/UV/uv.bundle.js',    // Path to this bundle script
  config: '/UV/uv.config.js',    // Path to UV config script
  sw: '/UV/Uv.sw.js',            // Path to service worker script
};
