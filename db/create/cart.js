import Database from 'better-sqlite3';

// read.js
export const createCart = (dbFile, idUser, idMovie) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO cart(userId, movieId) VALUES (?, ?)');
  stmt.run(idUser, idMovie);
  db.close();
  return true;
}