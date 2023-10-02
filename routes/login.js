import express from 'express';
import bcrypt from 'bcrypt';
import path from 'path';
import { fileURLToPath } from 'url';
import { readUser } from '../db/read/user.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/users.db');

const router = express.Router();

// get login page
router.get('/', (req, res) => {

  const title = 'Login';
  res.render('login', { title});
});

// post login page
router.post('/', (req, res) => {
  const user = readUser(dbFile, req.body.email);
  if (user) {
    const passwordMatch = bcrypt.compareSync(req.body.password, user.password);
    if (passwordMatch) {
      req.session.user = user.username;
      req.session.isLoggedIn = true;
      res.redirect('/');
      return;
    }
  } else {
    res.redirect('/');
  }

});

export { router } ;