const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: 'Guest',
  },
  email: {
    type: String,
    required: true,
    default: 'Guest',
  },
  avatar: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
  },
  signOutDate: {
    type: Number,
    default: Date.now,
  },
  questionsAnswered: [],
  gamesPlaied: {
    type: Number,
    default: 0,
  },
  winnerQty: {
    type: Number,
    default: 0,
  },
  totalScore: {
    type: Number,
    default: 0,
  },
  maxScoreIfNotWin: {
    type: Number,
    default: 0,
  },
  avarageScore: {
    type: Number,
    default: 0,
  },
  bestWinTime: {
    type: Number,
    default: 0,
  },
  avarageAnswerTime: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('User', userSchema);