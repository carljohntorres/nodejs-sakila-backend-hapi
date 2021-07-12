const mysql = require('mysql');
require('dotenv').config();

// const conn = mysql.createConnection({
    // host                 : process.env.DB_HOST,
    // user                 : process.env.DB_USER,
    // password             : process.env.DB_PASS,
    // database             : process.env.DB_NAME,
    // supportBigNumbers    : process.env.SUPPORTBIGNUMBER,
    // ssl                  : false
// });


// Use pool instead
const conn = mysql.createPool({
    connectionLimit      : process.env.P_LIMIT || 5, // if process.env.P_LIMIT is not exist in .env default value will placed
    host                 : process.env.DB_HOST,
    user                 : process.env.DB_USER,
    password             : process.env.DB_PASS,
    database             : process.env.DB_NAME,
    supportBigNumbers    : process.env.SUPPORTBIGNUMBER,
    ssl                  : false
});

module.exports = conn;