const db = require('../index.js');

const getHiraganaCards = (userId = 'sample') => {
  let dueHiraganaQuery =
    'select * from hiragana where user_id = $1 and repitition = (select min(repitition) from hiragana)';
  let dueCardsValues = [userId];

  return db.query(dueHiraganaQuery, dueCardsValues);
};

module.exports = getHiraganaCards;
