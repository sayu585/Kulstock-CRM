const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root Route - Fix for "Cannot GET /"
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
