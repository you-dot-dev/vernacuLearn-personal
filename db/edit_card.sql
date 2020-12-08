UPDATE personal_cards
SET difficulty = $4
WHERE owner_id = $1

SELECT * FROM personal_cards ORDER BY id