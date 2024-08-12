const mysql = require('mysql2');
require ("dotenv").config();


const pool = mysql.createPool({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'JVBweJnxSrQydUWhMBwDoHYeakSsUvSn',
  database: 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


pool.on('error', (err) => {
    console.error('MySQL pool error:', err);
  });

module.exports = pool.promise();