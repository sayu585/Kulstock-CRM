const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    res.send("Register Route");
});

router.post("/login", (req, res) => {
    res.send("Login Route");
});

router.get("/me", (req, res) => {
    res.send("User Info Route");
});

module.exports = router;
