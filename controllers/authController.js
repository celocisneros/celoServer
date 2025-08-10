const User = require('../models/user');

function registerUser(req, res) {
      console.log('Received registration request:', req.body);
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
        console.log('Missing fields');
    return res.status(400).json({ message: 'All fields are required' });
  }

  User.findUserByUsernameOrEmail(username, email, (err, existingUser) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    if (existingUser) {
              console.log('User already exists');
      return res.status(409).json({ message: 'Username or email already in use' });
    }

    User.createUser({ username, email, password }, (err, userId) => {
      if (err) {
                console.error('Create user error:', err);
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
      }
            console.log('User created with ID:', userId);
      res.status(201).json({ message: 'User registered successfully', userId });
    });
  });
}

module.exports = { registerUser };
