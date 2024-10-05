const config = {
  // Set the encoding function for URLs
  encodeUrl: (url) => {
    // Use the encodeURIComponent function to encode the URL
    return encodeURIComponent(url);
  },
};

// Export the config object
export default config;