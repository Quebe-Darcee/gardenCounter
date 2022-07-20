const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true},
  description: { type: String },
  amount: { type: Number }
});

module.exports = mongoose.model('Plant', plantSchema);
