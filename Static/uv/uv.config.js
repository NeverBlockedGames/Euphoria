self.__uv$config = {
  prefix: '/uv/service/',  // Proxy prefix
  bare: '/bare/',  // Bare server path
  encodeUrl: (url) => btoa(url),  // Base64 encode function
  decodeUrl: (url) => atob(url),  // Base64 decode function
};
