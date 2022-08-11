const checkUser = require('../../database/models/checkUser.js');
const getHiraganaCards = require('../../database/models/getHiraganaCards.js');
const getKatakanaCards = require('../../database/models/getKatakanaCards.js');

const initializeUser = require('../../database/models/initializeUser.js');

const getCards = (req, res) => {
  let dueCards = {};

  let user;
  if (req.oidc.user !== undefined) {
    user = req.oidc.user.email;
  } else {
    user = 'sample';
  }

  const getAllCards = (user) => {
    Promise.all([getHiraganaCards(user), getKatakanaCards(user)])
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

  checkUser(user).then((results) => {
    if (results.rows.length) {
      getAllCards(user);
    } else {
      (async () => {
        try {
          initializeUser(user);
        } catch (e) {
          throw e;
        }
      })().then(getAllCards(user));
    }
  });
};

module.exports = getCards;
