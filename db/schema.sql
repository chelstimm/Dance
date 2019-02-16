CREATE DATABASE dance_db;

Use dance_db;

CREATE TABLE dances (
  id INT NOT NULL AUTO_INCREMENT,
    dance VARCHAR(140) NOT NULL,
    queued BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM dance_db;