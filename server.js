// Load the Express framework
const express = require('express');

// Load Mongoose to connect to MongoDB
const mongoose = require('mongoose');

// Built-in Node module to work with file paths
const path = require('path');

// Create an instance of the Express app
const app = express();

// Use express.json() middleware to parse JSON bodies in requests
app.use(express.json());

// Serve static files (like HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB on localhost, using database 'abyssportal'
mongoose.connect('mongodb://localhost:27017/abyssportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB error:', err));

// Import the authentication routes
const authRoutes = require('./routes/auth');

// Use the authentication routes under the /api path
app.use('/api', authRoutes);

// Test route to make sure the API is working
app.get('/api/test', (req, res) => {
  res.send('API is working!');
});

// Set the port to 3000
const PORT = 3000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
