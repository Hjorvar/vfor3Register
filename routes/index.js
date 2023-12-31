import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { selectUsers } from '../db/read/users.js';

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/users.db');


// get index page
router.get('/', (req, res) => {
  const users = selectUsers(dbFile);
  const title = 'Home';
  let user = '';
  let isLoggedIn = false;
  if (req.session.isLoggedIn) {
    user = req.session.user;
    isLoggedIn = true;
  }
  res.render('index', { title, users, user, isLoggedIn });
});

export { router } ;