// routes/login.js
const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db"); // SQLite connection
const router = express.Router();

// Handle POST /login
router.post("/", async (req, res) => {
    console.log("BODY:", req.body); // Debugging

    const { username, password } = req.body;

    // Check if user exists
    db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, user) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send("Database error");
        }
        if (!user) {
            return res.status(400).send("Invalid username or password");
        }

        // Compare passwords
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).send("Invalid username or password");
        }

        // ✅ Successful login — redirect to profile
        res.redirect("/profile.html");
    });
});

module.exports = router;
