DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR NOT NULL,
    devoured BOOLEAN NOT NULL default 0
)
