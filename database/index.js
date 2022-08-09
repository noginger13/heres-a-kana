require('dotenv').config();

const { Pool } = require('pg');

const db = new Pool();
db.connect().then(() => {
  console.log(`Database '${process.env.PGDATABASE}' is now connected`);
});

module.exports = db;
