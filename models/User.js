const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_profile : {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
});
UserSchema.index({name: 'text'});

module.exports = User = mongoose.model('users', UserSchema);