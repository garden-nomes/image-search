const search = require('./search'),
	latest = require('./latest');

module.exports = (app) => {
	app.use('/search/:term', search);
	app.use('/latest', latest);

	return app;
};
