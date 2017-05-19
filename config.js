require('dotenv').config();

const config = {
  port:      process.env.PORT      || 8000,
  mongoUri:  process.env.MONGODB_URI || 'mongodb://localhost:27017/image-search',
  cseId:     process.env.CSE_ID,
  cseApiKey: process.env.CSE_API_KEY
};

module.exports = config;
