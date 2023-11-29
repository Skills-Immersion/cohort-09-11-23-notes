CREATE TABLE items (
--  for each column, we're giving
--  col_name DATATYPE [optional: constraints]
	id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	item_name TEXT NOT NULL,
	description TEXT,
	completed BOOLEAN DEFAULT false,
	created_at TIMESTAMPTZ DEFAULT now()
);

DROP TABLE items;

INSERT INTO items (item_name, description, completed) VALUES 
	('pillow', 'soft and fluffy', true);

INSERT INTO items(item_name) VALUES ('water bottle');

INSERT INTO items(description) VALUES ('lights up my life');

INSERT INTO items(item_name, description) VALUES 
	('fan', 'blows wind'),
	('pencils', 'writing is important');


