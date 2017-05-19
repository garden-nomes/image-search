const express = require('express'),
  db = require('./database'),
  config = require('./config'),
  routes = require('./routes'),
  app = express();

// Set up logging
app.use((req, res, next) => {
  const { url, query } = req,
    time = new Date();
  console.log({ time, url, query });
  next();
});

// Initialize routes
app.use(routes);

// Set up error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: err });
});

// Connect to database
console.log('* Connecting to database at ' + config.mongoUri);
db.connect(config.mongoUri, (err) => {
  if (err) { return console.error(err); }
  console.log('* Database connected!');

  // Start server
  console.log('* Starting server on port ' + config.port);
  app.listen(config.port, () => {
    console.log('* Listening on port ' + config.port + '...');
  });
});
