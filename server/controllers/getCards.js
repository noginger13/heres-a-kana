const getDueCards = require('../../database/models/getDueCards.js');

const getCards = (req, res) => {
  getDueCards()
  .then((cards) => {
    res.send(cards.rows);
    res.status(200);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
};

module.exports = getCards;