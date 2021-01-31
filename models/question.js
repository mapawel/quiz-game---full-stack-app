const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  content: [
    String
  ],
  correct: Number,
  id: Number,
})

module.exports = mongoose.model('Question', questionSchema);