const db = require('../index.js');

const checkUser = (userId = 'sample') => {
  let userQuery =
    'select * from users where id = $1';
  let userValues = [userId];

  return db.query(userQuery, userValues);
};

module.exports = checkUser;
