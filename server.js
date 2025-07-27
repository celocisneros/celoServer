const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Serve static files first
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Default route (if someone visits '/')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Import and use login route
const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
