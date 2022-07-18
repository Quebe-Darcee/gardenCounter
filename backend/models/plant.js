const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true},
  amount: { type: Number }
});

module.exports = mongoose.model('Plant', plantSchema);
