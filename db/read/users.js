import Database from 'better-sqlite3';

export const selectUsers = (dbFile) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('SELECT * FROM users');
  const users = stmt.all();
  db.close();
  return users;
};