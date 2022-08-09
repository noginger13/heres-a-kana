const db = require('../index.js');
const { hiragana, katakana, romaji } = require('../../helpers/characters.js');

initializeUser = (userId = 'sample') => {
  let userQuery = `insert into users values ($1)`;
  let userValues = [userId];

  let hiraganaString = '';
  let katakanaString = '';
  let hiraganaValues = [];
  let katakanaValues = [];

  let count = 1;

  for (let i = 0; i < romaji.length; i++) {
    hiraganaValues.push(userId, hiragana[i], romaji[i]);
    katakanaValues.push(userId, katakana[i], romaji[i]);

    if (i === romaji.length - 1) {
      hiraganaString += `(default, ${`$${count}`}, ${`$${count + 1}`}, ${`$${
        count + 2
      }`}, 1, 1, 2.5, 1);`;
      katakanaString += `(default, ${`$${count}`}, ${`$${count + 1}`}, ${`$${
        count + 2
      }`}, 1, 1, 2.5, 1);`;
    } else {
      hiraganaString += `(default, ${`$${count}`}, ${`$${count + 1}`}, ${`$${
        count + 2
      }`}, 1, 1, 2.5, 1), `;
      katakanaString += `(default, ${`$${count}`}, ${`$${count + 1}`}, ${`$${
        count + 2
      }`}, 1, 1, 2.5, 1), `;
    }

    count += 3;
  }
  let hiraganaQuery = `insert into kana values ${hiraganaString}`;
  let katakanaQuery = `insert into kana values ${katakanaString}`;

  //DB Transaction builds user items
  (async () => {
    try {
      await db.query('BEGIN');
      await db.query(userQuery, userValues);
      await db.query(hiraganaQuery, hiraganaValues);
      await db.query(katakanaQuery, katakanaValues);
      await db.query('COMMIT');
    } catch (e) {
      await db.query('ROLLBACK');
      throw e;
    }
  })().catch((e) => console.error(e));
};

initializeUser();
