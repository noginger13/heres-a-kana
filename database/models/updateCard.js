const db = require('../index.js');

//Helper
const setMetrics = require('../../helpers/setMetrics.js');

const updateCard = (card) => {
  let newCard = setMetrics(card);
  let updateCardQuery = 'update $1 set  = next + 1 where id = $1';
  let updateCardValues = [id];

  return db.query(updateCardQuery, updateCardValues);
};

module.exports = updateCard;
