// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    secret: process.env.JWT_SECRET,
    mongoURI: process.env.MONGO_URI,
    omdbApiKey: process.env.OMDB_API_KEY,
};
