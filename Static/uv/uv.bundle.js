import config from './uv.config.js';

// Create a function to handle requests to the proxy
const handleRequest = (req, res) => {
  // Get the URL from the request
  const url = req.url;

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
      .then((response) => response.json())
      .then((data) => {
        // Send the search results back to the client
        res.json(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
        res.status(500).send('Error fetching search results');
      });
  } else {
    // If the URL is not a search query, redirect the user to the original URL
    res.redirect(url);
  }
};

// Export the handleRequest function
export { handleRequest };
