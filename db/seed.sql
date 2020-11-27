CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  password VARCHAR(255),
  email_verified TINYINT(1) NOT NULL DEFAULT '0'
)

CREATE TABLE cards(
  id NOT NULL SERIAL,
  word_or_phrase VARCHAR(100) NOT NULL,
  definition VARCHAR(500) NOT NULL,
  difficulty enum('easy', 'medium', 'hard') NOT NULL,
  category VARCHAR(50) NOT NULL,
)

