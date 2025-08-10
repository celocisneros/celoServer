const bcrypt = require('bcrypt');

async function hashPassword(req, res, next) {
  try {
    if (req.body.password) {
      const saltRounds = 10;
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    }
    next();
  } catch (err) {
    console.error('Error hashing password:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = hashPassword;
