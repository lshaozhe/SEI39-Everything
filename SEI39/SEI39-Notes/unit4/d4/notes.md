# POSTGRES

conventions:
caps - native sql commands, nocaps - variable names
"" - columns/fields, '' - values

psql postgres

psql -U db_user -d django
-connect to db django with user db_user

CREATE DATABASE acme;
-the ; will execute the command

create user db_user with encrypted password 'example';

grant all privileges on database acme to db_user;

grant select, insert, update, delete on all tables in schema public to db_user;

\l
-list all db

\l+
-list all db to see more

\c acme
-connect to acme db

\dt
-list all tables

DROP DATABASE IF EXIST acme
-to drop db

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-install extension for uuid

CREATE TABLE the_contacts (
id serial NOT NULL,
uuid uuid DEFAULT uuid_generate_v4(),
name varchar(20)
number char(8),
PRIMARY KEY ("id")
);

- create a table, "" double quotes matters

\dt
-list tables

INSERT INTO the_contacts(name, number) VALUES ('Shawn','15');

- insert value into table

SELECT \* FROM the_contacts;

- read everything(\*) from a table

SELECT name, number FROM the_contacts
-read specific columns

SELECT uuid FROM the_contacts WHERE number='18';
-read the uuid where number column is 18

SELECT \* FROM the_contacts WHERE number='18' OR number='15'
-can use AND OR

SELECT \* FROM the_contacts WHERE name LIKE '%aw%';
-regex string contain aw in between. '%aw' ending with aw, 'aw%' starting with aw

ORDER BY and GROUP BY

UPDATE the_contacts SET name='Royce' WHERE id=1;
-update a row

DELETE FROM the_contacts WHERE id=1;

SELECT orders.order_id, customers.customer_name, orders.order_date FROM orders JOIN customers ON orders.customer_id=customers.id;

- reading from 2 tables thru a link (joins are always left to right)

SELECT \* FROM orders WHERE customer_id IN (SELECT if FROM customers)
-nested query

## aftn lesson

SELECT \* FROM authors;

CREATE TABLE IF NOT EXISTS books (
id SMALLSERIAL PRIMARY KEY,
title VARCHAR(30) NOT NULL,
author_id SMALLINT NOT NULL,
year_published SMALLINT NOT NULL,
genre VARCHAR(20) NOT NULL,
CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES authors(id),
CONSTRAINT fk_genre FOREIGN KEY (genre) REFERENCES genre(genre)
);
