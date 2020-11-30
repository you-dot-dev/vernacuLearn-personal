INSERT INTO users 
(firstName, lastName, email, password)
VALUES 
($1, $2, $3, $4)
RETURNING id, firstName, lastName, email;