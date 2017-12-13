const dbConnection = require('../database/db_connection.js');

const sql = 'select * from posts';
const getPost = (cb) => {
  dbConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const addPost = (name, post, cb) => {
  dbConnection.query(
    'INSERT INTO posts (name, post)VALUES ($1, $2)', [name, post],
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res);
      }
    },
  );
};
module.exports = {
  addPost,
  getPost,
};
