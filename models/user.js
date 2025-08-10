const db = require('../db');

function createUser({ username, email, password }, callback) {
  const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  db.run(sql, [username, email, password], function(err) {
    callback(err, this.lastID);
  });
}

function findUserByUsernameOrEmail(username, email, callback) {
  const sql = `SELECT * FROM users WHERE username = ? OR email = ?`;
  db.get(sql, [username, email], (err, row) => {
    callback(err, row);
  });
}

module.exports = { createUser, findUserByUsernameOrEmail };
