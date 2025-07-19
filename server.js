const express = require('express');
const path = require('path');
const app = express();

// app.get, the route, the callback function, the data

app.get('/api/message', (req, res) => {
    console.log('✅ GET /api/message was called');
    res.json({ message: 'hello from the backend' });
});

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});