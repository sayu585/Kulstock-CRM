const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Kulstock CRM Backend is Running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
