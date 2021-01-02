CREATE TYPE difficulty_list as ENUM('easy', 'medium', 'hard');
CREATE TYPE parts_of_speech as ENUM ('noun', 'verb', 'adjective', 'adverb', 'pronoun');
CREATE TABLE cards (
    id SERIAL PRIMARY KEY,
    word_or_phrase VARCHAR(1000) NOT NULL,
    definition VARCHAR(1000) NOT NULL,
    difficulty difficulty_list,
    category VARCHAR(50) NOT NULL,
    part_of_speech parts_of_speech
);

CREATE TABLE personal_cards (
  id SERIAL PRIMARY KEY,
  word_or_phrase VARCHAR(100) NOT NULL,
  definition VARCHAR(1000) NOT NULL,
  difficulty difficulty_list,
  category VARCHAR(50) NOT NULL,
  part_of_speech parts_of_speech,
  owner_id INT REFERENCES users(id)
);

