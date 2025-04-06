const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const QuizReport = require('../models/Result');

// Save report (protected route)
router.post('/', fetchUser, async (req, res) => {
  try {
    const { category, difficulty, score, totalQuestions } = req.body;
    const report = new QuizReport({
      user: req.user.id,
      category,
      difficulty,
      score,
      totalQuestions,
    });
    await report.save();
    res.json({ message: 'Quiz report saved successfully', report });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// ✅ Fetch all quiz reports for logged-in user
router.get('/myscores', fetchUser, async (req, res) => {
  try {
    const reports = await QuizReport.find({ user: req.user.id }).sort({ date: -1 });
    res.json(reports);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
