const dotenv = require('dotenv');
dotenv.config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const trackRouter = require('./controllers/tracks.js'); 

const app = express();


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


app.use(cors({ origin: 'http://localhost:5173' })); 

app.use(express.json());


app.use('/tracks', trackRouter); 

app.listen(3000, () => {
  console.log('The Jukebox express app is ready!');
});
