INSERT INTO personal_cards 
(word_or_phrase, definition, difficulty, category, part_of_speech, owner_id)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *