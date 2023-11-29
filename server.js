const express = require('express');
const fs = require('fs').promises; // Use the promise version of the fs module
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Asynchronous route to serve the products.json file
app.get('/api/products', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf8'); // Read the file asynchronously
    const products = JSON.parse(data); // Parse the data as JSON
    res.json(products); // Send the JSON data to the client
  } catch (error) {
    res.status(500).send('Unable to read products data');
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
