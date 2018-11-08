BEGIN TRANSACTION;

CREATE TABLE users (
    id serial PRIMARY KEY,
    fname varchar(50) NOT NULL,
    lname varchar(100),
    email text UNIQUE NOT NULL,
    joined TIMESTAMP NOT NULL
);

COMMIT;