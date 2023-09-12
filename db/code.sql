CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT,
  username TEXT,
  firstName TEXT,
  lastName TEXT,
  password TEXT,
  birthdate DATE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE users;

INSERT INTO users (name) VALUES ('Hjörvar Ingi Haraldss');