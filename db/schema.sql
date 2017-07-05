-- create database
CREATE database burger_db;

-- use burger_db databaswe
use burger_db;

-- create table burger_db

CREATE TABLE burgers
(
id int(11) auto_increment NOT NULL,
burger_name varchar(40) not null,
devoured boolean DEFAULT false,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)
);


