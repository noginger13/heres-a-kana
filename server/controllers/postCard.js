const updateCard = require('../../database/models/updateCard.js');

const postCard = (req, res) => {
  updateCard(req.body.id).then((result) => {
    console.log(result.command, result.rowCount);
    res.sendStatus(201);
  });
};

module.exports = postCard;
