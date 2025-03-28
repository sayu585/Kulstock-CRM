const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("Kulstock CRM Backend is Running...");
});

// Listen on port 5000 and allow access from anywhere
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
