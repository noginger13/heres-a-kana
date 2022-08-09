const db = require('../index.js');

const getDueCards = (userId = 'sample') => {
  let dueCardsQuery =
    'select * from kana where user_id = $1 and next = (select min(next) from kana)';
  let dueCardsValues = [userId];

  return db.query(dueCardsQuery, dueCardsValues);
};

module.exports = getDueCards;
