import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readMovies } from '../db/read/movies.js';
import { createCart } from '../db/create/cart.js';
import { readCart } from '../db/read/cartCount.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/movies.db');

const router = express.Router();

// get register page
router.get('/', (req, res) => {
  const movies = readMovies(dbFile);
  const title = 'Movies';
  const user = 1;
  let cartCount = readCart(dbFile, user);
  if (!cartCount) {
    cartCount = {};
    cartCount.count = 0;
  }
  res.render('movies', { title, movies, cartCount });
});

router.post('/', (req, res) => {
  const movie = req.body.movie;
  const user = 1;
  createCart(dbFile, user, movie);
  res.redirect('/movies');
});

export { router } ;