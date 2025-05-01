// Import the express module
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port the server will listen on
const port = 3000;

// Define a basic route for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
