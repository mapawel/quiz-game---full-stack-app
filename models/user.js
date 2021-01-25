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
  newEmail: String,
  password: {
    type: String,
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
  isSignedUp: {
    type: Boolean,
    default: false,
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  signUpToken: String,
  signUpTokenExpiration: Number,
  resetToken: String,
  resetTokenExpiration: Number,
  changMailToken: String,
  changMailTokenExpiration: Number,
})

module.exports = mongoose.model('User', userSchema);