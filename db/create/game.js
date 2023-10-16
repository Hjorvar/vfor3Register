import Database from 'better-sqlite3';

// read.js
export const createGame = (dbFile, name, description) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO games(name, description) VALUES (?, ?)');
  const game = stmt.run(name, description);
  const lastId = game.lastInsertRowid;
  db.close();
  return lastId;
}