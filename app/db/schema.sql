CREATE DATABASE todolist_db;
USE todolist_db;

CREATE TABLE list_items
(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  duedate datetime
);
