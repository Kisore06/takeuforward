const mysql = require('mysql2');
require ("dotenv").config();

const UrlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQPORT}/${process.env.MYSQLDATABASE}`

const pool = mysql.createPool(UrlDB);


pool.on('error', (err) => {
    console.error('MySQL pool error:', err);
  });

module.exports = pool.promise();