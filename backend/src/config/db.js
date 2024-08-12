const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'take_u_forward',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


pool.on('error', (err) => {
    console.error('MySQL pool error:', err);
  });

module.exports = pool.promise();