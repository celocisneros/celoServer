const mongoose = require('mongoose');

// Define the schema (structure) for a user
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create and export the model
module.exports = mongoose.model('User', userSchema);
