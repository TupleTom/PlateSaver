const express = require('express');
const app = express();
const port = 3000;
const inventoryController = require('./controller');

// Middleware for parsing JSON bodies
app.use(express.json());

// Use our inventory controller for all routes starting with /inventory
app.use('/inventory', inventoryController);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});