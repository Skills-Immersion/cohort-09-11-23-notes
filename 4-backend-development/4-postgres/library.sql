-- Library Tables

CREATE TABLE books (
	book_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	-- varchar imposes a hard limit on the number of characters
	-- text is flexible, but that means it can take up more actual hard drive space to store
	title TEXT NOT NULL,
	author VARCHAR(255) NOT NULL,
	genre VARCHAR(50)
);

INSERT INTO books (title, author, genre) VALUES 
	('The Dark Tower', 'Stephen King', 'Science Fiction'),
	('Five Rings', 'Miyamoto Musashi', 'Self-help'),
	('The Cat in the Hat', 'Dr Seuss', 'Fiction');
	
SELECT * FROM books;

-- the checkouts table is going to hold...
-- which book got checked out
-- that is a foreign key: a column in one table that references the primary key from another table
-- by who
-- on what day
-- due date
CREATE TABLE checkouts (
	checkout_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	book_id INTEGER REFERENCES books(book_id),
	account_number INTEGER NOT NULL,
	checkout_date DATE NOT NULL,
	due_date DATE
);

INSERT INTO checkouts(book_id, account_number, checkout_date) VALUES 
	(1, 896546, '2023-11-22');

INSERT INTO checkouts(book_id, account_number, checkout_date) VALUES 
	(1, 894516, '2023-10-25');

-- SQL will prevent us from inserting, deleting, updating in any way that would break a reference
INSERT INTO checkouts(book_id, account_number, checkout_date) VALUES 
	(73, 896546, '2023-11-22');
	
DELETE FROM books WHERE book_id = 1;

SELECT * FROM checkouts;

INSERT INTO checkouts(book_id, account_number, checkout_date, due_date) VALUES 
	(2, 896546, '2023-11-22', '2023-12-01'),
	(3, 98541635, '2023-12-12', null);

-- to select data from across multiple related tables, we use JOIN
SELECT * FROM checkouts JOIN books ON checkouts.book_id = books.book_id;

-- to find the checkout date of self-help books, do the join to get info from both tables

SELECT checkout_date FROM checkouts JOIN books ON checkouts.book_id = books.book_id WHERE genre = 'Self-help';

-- let's turn this into a many-to-many relationship
-- a book can be checked out by many people! 
-- books are connected to checkouts, which are in turn connected to people

CREATE TABLE patrons(
	account_number INTEGER PRIMARY KEY,
	patron_name VARCHAR(255)
);

ALTER TABLE checkouts DROP COLUMN account_number;

ALTER TABLE checkouts ADD patron INTEGER REFERENCES patrons(account_number);

INSERT INTO patrons(account_number, patron_name) VALUES (789, 'Mr Bill'), (32416, 'Moleman'), (5496, 'Timmy');

INSERT INTO books(title, author, genre) VALUES('intro to flying', 'jimmy', 'how to');

INSERT INTO checkouts(book_id, patron, checkout_date, due_date) VALUES(4, 5496, '2023-11-30', '2023-12-30');
UPDATE checkouts SET patron = 789 WHERE patron IS NULL;

SELECT * FROM patrons
	JOIN checkouts ON patrons.account_number = checkouts.patron
	JOIN books ON checkouts.book_id = books.book_id 
	ORDER BY due_date;
	
-- by default, all joins are inner joins - they only get the overlapping data

SELECT * FROM checkouts FULL JOIN patrons ON patrons.account_number = checkouts.patron ;
UPDATE checkouts SET patron = NULL WHERE checkout_id = 5;

INSERT INTO books(title, author, genre) VALUES ('Twilight', 'Stephanie Meyer', 'teen lit from the 2000s');
SELECT * FROM patrons
	FULL JOIN checkouts ON patrons.account_number = checkouts.patron
	FULL JOIN books ON checkouts.book_id = books.book_id 
	ORDER BY due_date;