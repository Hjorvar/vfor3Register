import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readCharacters } from '../db/read/characters.js';
import { createGame } from '../db/create/game.js';
import { createGameCharacter } from '../db/create/gameCharacter.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/games.db');

const router = express.Router();

// get game page
router.get('/', (req, res) => {
  const characters = readCharacters(dbFile);
  res.render('game', { title: 'Characters', characters });
});

router.post('/', (req, res) => {
  console.log(req.body)
  const lastId = createGame(dbFile, req.body.name, req.body.description);
  const characters = req.body.character;
  for (let i = 0; i < characters.length; i++) {
    createGameCharacter(dbFile, lastId, characters[i]);
  }
  res.redirect('/game')
});

export { router } ;