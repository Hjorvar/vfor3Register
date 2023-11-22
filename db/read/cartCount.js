import Database from 'better-sqlite3';

export function readCart(dbFile, idUser) {
  const db = new Database(dbFile);

  const stmt = db.prepare('SELECT COUNT(*) AS "count" FROM cart WHERE userId = ? GROUP BY userId;');
  const cart = stmt.get(idUser);

  db.close();

  return cart;
}
