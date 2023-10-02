import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { deleteUser } from '../db/delete/user.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/users.db');

const router = express.Router();

// get delete page
router.get('/', (req, res) => {
  res.redirect('/');
});

// post delete page
router.post('/', (req, res) => {
  deleteUser(dbFile, req.body.idUser);
  res.redirect('/');
});

export { router } ;