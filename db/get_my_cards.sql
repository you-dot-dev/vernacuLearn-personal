SELECT * FROM personal_cards
WHERE owner_id = $1

ORDER BY id;