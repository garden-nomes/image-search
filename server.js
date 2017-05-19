const express = require('express'),
  db = require('./database'),
	config = require('./config'),
	routes = require('./routes');

console.log('* Setting up routes');
const app = routes(express());

console.log('* Connecting to database at ' + config.mongoUri);
db.connect(config.mongoUri, (err) => {
	if (err) { return console.error(err); }
	console.log('* Database connected!');

	console.log('* Starting server on port ' + config.port);
	app.listen(config.port, () => {
		console.log('* Listening on port ' + config.port + '...');
	});
});
