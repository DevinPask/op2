const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const scoreRoutes = require('./score-routes');
const questionRoutes = require('./question-routes');
const quizRoutes = require('./quiz-routes');

router.use('/users', userRoutes);
router.use('/scores', scoreRoutes);
router.use('/questions', questionRoutes);
router.use('/quiz', quizRoutes)
module.exports = router;
