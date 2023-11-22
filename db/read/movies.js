import Database from 'better-sqlite3';

export function readMovies(dbFile) {
  const db = new Database(dbFile);

  const stmt = db.prepare('SELECT * FROM movies');
  const movies = stmt.all();

  db.close();

  return movies;
}
