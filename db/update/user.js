import Database from 'better-sqlite3';

// update.js
export const updateUser = (dbFile, idUser, firstName, lastName, 
                            birthDate, email, username) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('UPDATE users SET firstName =?, \
                                            lastName = ?, \
                                            birthDate = ?, \
                                            email = ?, \
                                            username = ?\
                                        WHERE id = ?');
  stmt.run(firstName, lastName, birthDate, email, username, idUser);
  db.close();
  return true;
}