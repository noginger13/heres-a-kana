const db = require('../index.js');

const getDueCards = (userId = 'sample', next = 1) => {
  let dueCardsQuery = 'select * from kana where user_id = $1 and next = $2';
  let dueCardsValues = [userId, next];

  return db.query(dueCardsQuery, dueCardsValues);
};

module.exports = getDueCards;
