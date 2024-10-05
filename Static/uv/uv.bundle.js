import config from './uv.config.js';

// Create a function to handle requests to the proxy
const handleRequest = (url) => {
  // Check if the URL is a search query
  if (url.includes('search?q=')) {
    // Extract the search query from the URL
    const query = url.split('search?q=')[1];

    // Use the DuckDuckGo search API to fetch the search results
    fetch(`https://api.duckduckgo.com/?q=${query}&format=json`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Send the search results back to the client
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
        alert('Error: ' + error.message);
      });
  } else {
    // If the URL is not a search query, redirect the user to the original URL
    window.location.href = url;
  }
};

// Export the handleRequest function
export { handleRequest };
