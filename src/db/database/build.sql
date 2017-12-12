BEGIN;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  post VARCHAR(250) NOT NULL,
);

INSERT INTO posts (name, post)
  VALUES ('Hanan', 'Test Post One'),
         ('Nadia', 'Test Post Two'),
         ('Nour', 'Test Post Three');

COMMIT;
