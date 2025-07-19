const express = require('express');
const path = require('path');
const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get, the route, the callback function, the data

app.get('http://52.186.84.191:3000/api/message', (req, res) => {
    console.log('✅ GET /api/message was called');
    res.json({ message: 'hello from the backend'});
});



// Listen on port 3000
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://<your-public-ip>:${PORT}`);
});
