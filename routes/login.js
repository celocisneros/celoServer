const express = require('express');
const router = express.Router();

const dummyUser = {
    username: 'marcelo',
    password: 'password'
};

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === dummyUser.username && password === dummyUser.password) {
    res.send('Login successful!');
    res.redirect('/home/azureuser/celoServer/public/profile.html');
  } else {
    res.status(401).send('Invalid credentials.');
  }
});

module.exports = router;