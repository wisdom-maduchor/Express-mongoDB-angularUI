const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  location: String,
  cost: String
});

module.exports = mongoose.model('Item', itemSchema);
// const Item = mongoose.model('Item', itemSchema);
