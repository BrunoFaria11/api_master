
require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB} = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB,
    "host": DB_HOST,
    "dialect": "postgres"
  },
}

