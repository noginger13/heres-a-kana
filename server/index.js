require('dotenv').config();
const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');

//Database
const db = require('../database/');

//Controllers
const getCards = require('./controllers/getCards.js');
const postCard = require('./controllers/postCard.js');

const app = express();

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true
  })
);
app.use(express.json());
app.use(express.static('client/dist'));

app.get('/user/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'yup' : 'nope');
});

app.get('/kana/', getCards);
app.post('/kana/', postCard);

app.listen(process.env.PORT, () => {
  console.log(`Server 'kanaapi' is listening on ${process.env.PORT}`);
});
