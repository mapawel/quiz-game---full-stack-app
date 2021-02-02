require('dotenv-safe').config();

module.exports = process.env.HOST === 'development' ? 'http://localhost:8000' : process.env.HOST;