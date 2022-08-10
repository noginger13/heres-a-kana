const getHiraganaCards = require('../../database/models/getHiraganaCards.js');
const getKatakanaCards = require('../../database/models/getKatakanaCards.js');

const getCards = (req, res) => {
  let dueCards = {};

  Promise.all([getHiraganaCards(), getKatakanaCards()])
    .then((cards) => {
      dueCards.hiragana = cards[0].rows;
      dueCards.katakana = cards[1].rows;
      res.send(dueCards);
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = getCards;
