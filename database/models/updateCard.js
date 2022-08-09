const db = require('../index.js');

const updateCard = (id = 96) => {
  let updateCardQuery = 'update kana set next = next + 1 where id = $1';
  let updateCardValues = [id];

  return db.query(updateCardQuery, updateCardValues);
};

module.exports = updateCard;
