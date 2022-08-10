const db = require('../index.js');

//Helper
const setMetrics = require('../../helpers/setMetrics.js');

const updateCard = (card) => {
  let newCard = setMetrics(card);
  let updateCardQuery = `update ${card.type} set interval = $1, repitition = $2, ease = $3 where id = $4`;
  let updateCardValues = [card.interval, card.repitition, card.ease, card.id];

  return db.query(updateCardQuery, updateCardValues);
};

module.exports = updateCard;
