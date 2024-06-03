// utils/omdbapi.js
const axios = require('axios');
const config = require('../config');

const searchMovies = async (title) => {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${config.omdbApiKey}&s=${title}`);
    return data;
};

module.exports = { searchMovies };
