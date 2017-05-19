const mongo = require('mongodb').MongoClient;

const database = {
  db: null,
	connect(uri, callback) {
		if (this.db) { return callback(null); }

		mongo.connect(uri, (err, db) => {
			if (err) { return callback(err); }
			this.db = db;
		});
	},
	close(err, callback) {
		if (!this.db) { return callback(); }
		this.db.close((err) => {
			this.db = null;
      callback(err);
		});
	}
};

module.exports = database;
