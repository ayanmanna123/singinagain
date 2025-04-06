const mongoose = require('mongoose');

const quizReportSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  takenAt: {
    type: Date,
    default: Date.now
  },
  // Optional field if user system is there
  user: {
    type: String // could be userId or email
  }
});

module.exports = mongoose.model('QuizReport', quizReportSchema);
