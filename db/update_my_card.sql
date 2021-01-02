UPDATE personal_cards

SET word_or_phrase = $3,
definition = $4,
category = $5,
part_of_speech = $6,
difficulty = $7

WHERE owner_id = $1 AND id = $2

RETURNING *;