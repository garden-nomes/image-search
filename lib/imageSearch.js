const https = require('https'),
  URI = require('urijs'),
  config = require('../config');

module.exports = (term, start = 1, callback = () => null) => {
  const query = {
    q: term,
    start,
    searchType: 'image',
    key: config.cseApiKey,
    cx: config.cseId
  };

  const uri = URI('https://www.googleapis.com/customsearch/v1').query(query);
  https.get(uri.toString(), (res) => {
    const { statusCode } = res,
      contentType = res.headers['content-type'];

    if (statusCode !== 200) {
      res.resume();
      return callback(new Error(`Request fails with status code ${statusCode}`));
    } else if (!/^application\/json/.test(contentType)) {
      res.resume();
      return callback(new Error(`Invalid content type ${contentType}`));
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', chunk => rawData += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(rawData);
        callback(null, json.items.map(item => ({
          url: item.link,
          snippet: item.snippet,
          context: item.image.contextLink
        })));
      } catch (e) {
        callback(e);
      }
    });
  }).on('error', callback);
};
