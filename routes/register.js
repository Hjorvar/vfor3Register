import express from 'express';
import bcrypt from 'bcrypt';
import path from 'path';
import { fileURLToPath } from 'url';
import { createUsers } from '../db/create/user.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/users.db');

const router = express.Router();

// get register page
router.get('/', (req, res) => {

  const title = 'Register';
  res.render('register', { title });
});

router.post('/', (req, res) => {
  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  createUsers(dbFile, req.body.email, req.body.username, req.body.firstName, req.body.lastName, passwordHash, req.body.birthdate)

  res.redirect('/');
});

export { router } ;