const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

// Authentication routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Kulstock CRM Backend is Running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
