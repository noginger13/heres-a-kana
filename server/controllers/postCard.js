const updateCard = require('../../database/models/updateCard.js');

const postCard = (req, res) => {
  updateCard(req.body)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = postCard;
