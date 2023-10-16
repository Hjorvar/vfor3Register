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


CREATE TABLE games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT
);  

CREATE TABLE characters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT
);

CREATE TABLE gameCharacters (
  gameId INTEGER,
  characterId INTEGER,
  PRIMARY KEY (gameId, characterId),
  FOREIGN KEY (gameId) REFERENCES games(id),
  FOREIGN KEY (characterId) REFERENCES characters(id)
);

INSERT INTO characters (name, description) 
VALUES ('Masterchief', 'The main character of the Halo series'),
('Marcus Fenix', 'The main character in the Gears of War series'),
('Kratos', 'The main character in the God of War series');

INSERT INTO characters (name, description)
VALUES ('Spider-Man', 'The main character of the Spider-Man series');

SELECT * 
FROM characters INNER JOIN gameCharacters 
ON characters.id = gameCharacters.characterId
INNER JOIN games
ON games.id = gameCharacters.gameId
WHERE games.name LIKE "%Jerry%";

INSERT INTO characters (name, description)
VALUES ('John Wick', 'The main character of the Jon Wick series');