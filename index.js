const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

const MovieRoutes = require('./routes/movie.routes');
const theatreRoutes = require('./routes/theatre.routes'); 


const app = express();

env.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MovieRoutes(app);
theatreRoutes(app);
theatreRoutes(app);

// app.get('/home', (req, res) => {
//     return res.json({
//         success: true,
//         message:'fetch home'
//     })
// })
app.listen(process.env.PORT || 3000, async () => {
  const port = process.env.PORT || 3000;
  console.log(`Server is running on port ${port} !!`);

  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to MongoDB');
    
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
});