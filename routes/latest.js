const search = require('../models/search');

module.exports = (req, res, next) => {
  search.latest((err, results) => {
    if (err) {
      next(err);
    } else {
      results = results.map(({ term, timestamp }) => ({ term, timestamp }));
      res.send(results);
    }
  });
};
