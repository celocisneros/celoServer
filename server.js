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
app.get('/api/message', (req, res) => {
    res.json({ message: 'hello from the backend'});
});



// Listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://<your-public-ip>:${PORT}`);
});
