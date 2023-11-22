import express from 'express';
import movies from '../db/movies.js';

const router = express.Router();

// get game page
router.get('/', (req, res) => {
  const movieList = movies 
  res.render('items', { title: 'Items', movies: movieList });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/items')
});

export { router } ;