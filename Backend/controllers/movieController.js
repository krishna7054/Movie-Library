// controllers/moviecontroller.js
const { searchMovies } = require('../utils/omdbApi');

const searchMoviesHandler = async (req, res) => {
    try {
        const { title } = req.query;
        const data = await searchMovies(title);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies' });
    }
};

module.exports = { searchMoviesHandler };
