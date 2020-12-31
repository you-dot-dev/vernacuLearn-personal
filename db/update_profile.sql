UPDATE users

SET profile_url = $1

WHERE id = $2

RETURNING *;