// abyssPortal.js

// this is the server or app js

const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // parse form submissions
app.use(express.json()); // parse JSON bodies
app.use(express.static(path.join(__dirname, 'public'))); // serve static files

// Routes
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const loginRoute = require('./routes/login');
app.use('/login', loginRoute); // ✅ now matches your form action="/login"

// Test route
app.get('/api/test', (req, res) => {
  res.send('API is working!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
