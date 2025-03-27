const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("../models/User");
const { JWT_SECRET } = require("../config");

const router = express.Router();

router.post("/register", (req, res) => {
    const { name, email, password, role } = req.body;
    if (users.find(user => user.email === email)) return res.status(400).json({ message: "User already exists" });

    users.push({ name, email, password, role });
    res.json({ message: "User registered successfully" });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});

module.exports = router;
