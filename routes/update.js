import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readUser } from '../db/read/user.js';
import { updateUser } from '../db/update/user.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/users.db');

const router = express.Router();

// get update page
router.get('/', (req, res) => {
  if (!req.query.email) {
    res.redirect('/');
  } else {
    const user = readUser(dbFile, req.query.email);
    const title = 'Update';
    res.render('update', { title, user });
  }
});

router.post('/', (req, res) => {
  if (!req.body.password) {
    updateUser(dbFile,  req.body.idUser,
                        req.body.firstName, 
                        req.body.lastName, 
                        req.body.birthDate, 
                        req.body.email, 
                        req.body.username
              );
  }
  res.redirect('/');
});

export { router } ;