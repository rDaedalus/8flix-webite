import mysql from 'mysql2/promise';

// create the connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_mysql_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// execute a query
(async () => {
  const conn = await pool.getConnection();
  const [rows, fields] = await conn.query('SELECT * FROM your_table');
  console.log(rows);
  conn.release();
})();