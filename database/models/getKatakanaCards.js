const db = require('../index.js');

const getKatakanaCards = (userId = 'sample') => {
  let dueKatakanaQuery =
    'select * from katakana where user_id = $1 and repitition = (select min(repitition) from katakana)';
  let dueCardsValues = [userId];

  return db.query(dueKatakanaQuery, dueCardsValues);
};

module.exports = getKatakanaCards;
