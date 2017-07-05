-- use burger_db database
use burger_db;

-- insert 3 values in db

INSERT INTO `burgers` (burger_name, devoured, date) 
VALUES ('cheese', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) 
VALUES ('chicken', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) 
VALUES ('fish', false, CURRENT_TIMESTAMP);