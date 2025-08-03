const express = require('express');
const router = express.Router();

const dummyUser = {
    username: 'marcelo',
    password: 'password'
};

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === dummyUser.username && password === dummyUser.password) {
    req.session.username = username; // This means the username is now saved in the session for that user.
    res.redirect('/dashboard.html'); //the redirect will come after saving the username
  } else {
    res.status(401).send('Invalid credentials.');
  }
});

module.exports = router;