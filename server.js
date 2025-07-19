const express = require('express');
const path = require('path');
const app = express();


// ✅ API route FIRST
app.get('/api/message', (req, res) => {
  console.log('GET /api/message route hit');
  res.json({ message: 'hello from the backend' });
});

// ✅ Static files SECOND
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Default route LAST (optional fallback)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});