const db = require('../index.js');

const User = db.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
});

const Hiragana = db.define('Hiragana', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER
  },
  front: {
    type: DataTypes.STRING
  },
  back: {
    type: DataTypes.STRING
  },
  interval: {
    type: DataTypes.INTEGER
  },
  repitition: {
    type: DataTypes.INTEGER
  },
  ease: {
    type: DataTypes.INTEGER
  },
  next: {
    type: DataTypes.INTEGER
  }
});

const Katakana = db.define('Katakana', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER
  },
  front: {
    type: DataTypes.STRING
  },
  back: {
    type: DataTypes.STRING
  },
  interval: {
    type: DataTypes.INTEGER
  },
  repitition: {
    type: DataTypes.INTEGER
  },
  ease: {
    type: DataTypes.INTEGER
  },
  next: {
    type: DataTypes.INTEGER
  }
});

User.hasMany(Hiragana);
User.hasMany(Katakana);