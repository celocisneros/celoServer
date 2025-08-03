const express = require('express');
const path = require('path');
const app = express();
const session = require('./sessionConfig'); // ← import from other file

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session); // ← apply the middleware here

// ✅ Serve static files first
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Default route (if someone visits '/')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Dashboard route
app.get('/dashboard', (req, res) => {
  const user = req.session.username;
  if (!user) return res.redirect('/');
  res.send(`<h1>Welcome, ${user}!</h1><a href="/logout">Logout</a>`);
});

app.get('/api/user', (req, res) => {
  if (req.session && req.session.username) {
    res.json({ username: req.session.username });
  } else {
    res.json({ username: null });
  }
});


// Import and use login route
const loginRoute = require('./routes/login');
app.use('/login', loginRoute);


const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
