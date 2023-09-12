import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { selectUsers } from '../db/select/users.js';

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/users.db');


// get index page
router.get('/', (req, res) => {
  const users = selectUsers(dbFile);
  const title = 'Home';
  res.render('index', { title, users});
});

export { router } ;