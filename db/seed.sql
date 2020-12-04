CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  password VARCHAR(255),
  email_verified TINYINT(1) NOT NULL DEFAULT '0'
)

CREATE TABLE cards(
  id NOT NULL SERIAL PRIMARY KEY,
  word_or_phrase VARCHAR(100) NOT NULL,
  definition VARCHAR(500) NOT NULL,
  difficulty ENUM('easy', 'medium', 'hard') NOT NULL,
  category VARCHAR(50) NOT NULL,
)

-- CREATE TABLE interests (
--   id SERIAL PRIMARY KEY,
--   interest VARCHAR(50)
--   card_id REFERENCES cards(id)
-- )


CREATE TABLE personal_cards (
  id SERIAL PRIMARY KEY,
  word_or_phrase VARCHAR(100) NOT NULL,
  definition VARCHAR(1000) NOT NULL,
  difficulty difficulty_list,
  category VARCHAR(50) NOT NULL,
  part_of_speech parts_of_speech,
  owner_id INT REFERENCES users(id)
);
