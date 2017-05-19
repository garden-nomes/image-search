const db = require('../database');

const SEARCHES = 'searches';

const search = {
  create(term, callback) {
    const collection = db.get().collection(SEARCHES),
      timestamp = new Date();
    collection.insertOne({ term, timestamp }, callback);
  },

  latest(callback) {
    const collection = db.get().collection(SEARCHES);

    return collection.find()
      .sort({ timestamp: -1 })
      .limit(10)
      .toArray(callback);
  }
};

module.exports = search;
