// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const listRoutes = require('./routes/listRoutes');
const cors = require('cors');

dotenv.config();
connectDB();


const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: "https://coruscating-churros-aea073.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/lists', listRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
