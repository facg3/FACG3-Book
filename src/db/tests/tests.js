const dbDo = require('../queries/db_functions');
const test = require('tape');

test('Test-1: getPost Function Test:', (t) => {
  dbDo.getPost((err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.equal(res.length, 3, 'Number of rows should be incremented by one.');
      t.deepEqual(res[0], {
        id: 1,
        name: 'Hanan',
        post: 'Test Post One',
      }, 'First Row Test Should Pass Correctly.');
      t.deepEqual(res[1], {
        id: 2,
        name: 'Nadia',
        post: 'Test Post Two',
      }, 'Second Row Test Should Pass Correctly.');
      t.deepEqual(res[2], {
        id: 3,
        name: 'Nour',
        post: 'Test Post Three',
      }, 'Third Row Test Should Pass Correctly.');
      t.end();
    }
  });
});

test('Test-2: addPost Function Test:', (t) => {
  dbDo.addPost('Sultan', 'Test Post Four', (err, newData) => {
    if (err) {
      t.notOk(err);
    } else {
      dbDo.getPost((err2, newData1) => {
        if (err) {
          t.notOk(err);
        } else {
          t.equal(newData1.length, 4, 'Number of Rows Should Equal (4).');
          t.deepEqual(newData1[newData1.length - 1], {
            id: 4,
            name: 'Sultan',
            post: 'Test Post Four',
          }, 'Last Row Should Equal Test Value.');
          t.end();
        }
      });
    }
  });
});
