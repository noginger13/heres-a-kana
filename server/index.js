require('dotenv').config();
const express = require('express');

const db = require('../database/');

const app = express();

app.use(express.json());
app.use(express.static('client/dist'));

app.listen(process.env.PORT, () => {
  console.log(`Server 'kanaapi' is listening on ${process.env.PORT}`);
});
