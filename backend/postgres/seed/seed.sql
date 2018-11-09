BEGIN TRANSACTION;

INSERT into users (id, fname, lname, email, joined) VALUES 
    (1, 'Latashia', 'Adams', 'a@a.com', '2013-5-17'),
    (2, 'Marquetta', 'Bowers', 'b@b.com', '2000-11-25'),
    (3, 'Anya', 'Evans', 'c@c.com', '2000-7-10'),
    (4, 'John', 'Niels', 'd@d.com', '2008-7-2'),
    (5, 'Peter', 'Murado', 'e@e.com', '2012-9-20'),
    (6, 'Carolyn', 'Davenport', 'f@f.com', '2011-6-11'),
    (7, 'Krystin', 'Nielsen', 'g@g.com', '2011-4-5'),
    (8, 'Paul', 'Parrish', 'h@h.com', '2015-9-15'),
    (9, 'James', 'Stevenson', 'i@i.com', '2013-5-2'),
    (10, 'Cleora', 'Chen', 'j@j.com', '2017-4-20'),
    (11, 'Marcel', 'Scott', 'k@k.com', '2017-7-4'),
    (12, 'Wayne', 'Thompson', 'l@l.com', '2014-10-18'),
    (13, 'Sabra', 'Gay', 'm@m.com', '2014-12-15'),
    (14, 'Lauren', 'Bernard', 'n@n.com', '2007-11-22'),
    (15, 'Johnny', 'Shaw', 'o@o.com', '2012-10-19'),
    (16, 'Ellis', 'Cuevas', 'p@p.com', '2007-9-3'),
    (17, 'Mugato', 'Kennedy', 'q@q.com', '2015-12-6'),
    (18, 'Zultan', 'Key', 'r@r.com', '2000-7-9'),
    (19, 'Bobert', 'Kelly', 's@s.com', '2017-9-23'),
    (20, 'Carol', 'Dillon', 't@t.com', '2017-5-5'),
    (21, 'Lore', 'Rosales', 'u@u.com', '2000-8-21'),
    (22, 'Paulene', 'Gill', 'v@v.com', '2001-4-5'),
    (23, 'Malik', 'Davila', 'w@w.com', '2013-7-15'),
    (24, 'Dwayne', 'Shields', 'x@x.com', '2017-3-12'),
    (25, 'Kevin', 'Roberts', 'y@y.com', '2010-8-21'),
    (26, 'Lakita', 'Murillo', 'z@z.com', '2008-7-19');

COMMIT;