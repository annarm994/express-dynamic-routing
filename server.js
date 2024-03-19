// Import required modules
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Dynamic Route Handling
app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello ${username}`);
});

// Error Management: 404 Not Found
app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});