// rotes/listroutes.js
const express = require('express');
const { createList, getLists, addMovieToList, deleteMovieFromList,deleteList } = require('../controllers/listController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createList).get(protect, getLists);
router.route('/:id').post(protect, addMovieToList).delete(protect, deleteList);
router.route('/:listId/movies/:movieId').delete(protect, deleteMovieFromList);

module.exports = router;
