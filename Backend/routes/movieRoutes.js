// routes/movieroutes.ja
const express = require('express');
const { searchMoviesHandler } = require('../controllers/movieController');

const router = express.Router();

router.get('/search', searchMoviesHandler);

module.exports = router;
