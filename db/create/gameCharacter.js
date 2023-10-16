import Database from 'better-sqlite3';

export const createGameCharacter = (dbFile, gameId, characterId) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO gameCharacters(gameId, characterId) VALUES (?, ?)');
  stmt.run(gameId, characterId);
  db.close();
  return true;
}