const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import User model
const { registerUser } = require('../controllers/authController');
const hashPassword = require('../middleware/hashPassword');

// POST /api/register
router.post('/register', hashPassword, registerUser);

module.exports = router;