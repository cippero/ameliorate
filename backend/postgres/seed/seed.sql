BEGIN TRANSACTION;

INSERT into users (id, fname, lname, email, joined) VALUES 
(1, 'Shlomo', 'Rabinovitz', 'a@a.com', '2018-01-13'),
(2, 'Bob', 'Marley', 'b@b.com', '2018-02-16'),
(3, 'Sarah', 'Silverman', 'c@c.com', '2017-07-27'),
(4, 'Marley', 'Andme', 'd@d.com', '2015-03-01');

COMMIT;