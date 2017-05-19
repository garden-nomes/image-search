const search = require('../models/search'),
  imageSearch = require('../lib/imageSearch');

module.exports = (req, res, next) => {
  const { term } = req.params,
    offset = +req.query.offset || 1;

  if (isNaN(offset) || offset < 1 || offset > 90) {
    res.status(400).send({
      error: '"offset" must be a valid integer between 1 and 90'
    });
  } else {
    search.create(term, (err) => {
  		if (err) { console.error(err); }
    });

    imageSearch(term, offset, (err, results) => {
      if (err) {
        next(err);
      } else {
        res.send(results);
      }
    });
  }
};
