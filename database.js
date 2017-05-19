const mongo = require('mongodb').MongoClient;

let db = null;

const database = {
  connect(uri, callback) {
    if (db) { return callback(null); }

    mongo.connect(uri, (err, db_) => {
      if (err) { return callback(err); }

      db = db_;
      callback();
    });
  },

  close(err, callback) {
    if (!this.db) { return callback(); }

    db.close((err) => {
      db = null;
      callback(err);
    });
  },

  get() {
    return db;
  }
};

module.exports = database;
