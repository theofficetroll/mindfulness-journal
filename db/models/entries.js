const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  entry: String,
  keywords: String,
  type: String,
  date: Date,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
