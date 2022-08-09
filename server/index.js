require('dotenv').config();
const express = require('express');

//Database
const db = require('../database/');

//Controllers
const getCards = require('./controllers/getCards.js');
const postCard = require('./controllers/postCard.js');

const app = express();

app.use(express.json());
app.use(express.static('client/dist'));

app.get('/kana/', getCards);
app.post('/kana/', postCard);

app.listen(process.env.PORT, () => {
  console.log(`Server 'kanaapi' is listening on ${process.env.PORT}`);
});
