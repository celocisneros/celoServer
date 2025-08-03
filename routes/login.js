const express = require('express');
const router = express.Router();

const dummyUser = {
    username: 'marcelo',
    password: 'password'
};

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === dummyUser.username && password === dummyUser.password) {
    req.session.username = username; // MUST be set before redirect
    res.redirect('/dashboard.html');
  } else {
    res.status(401).send('Invalid credentials.');
  }
});

module.exports = router;