const express = require('express'),
      search = require('./search'),
      latest = require('./latest'),
      router = express.Router();

router.use('/search/:term', search);
router.use('/latest', latest);

module.exports = router;
