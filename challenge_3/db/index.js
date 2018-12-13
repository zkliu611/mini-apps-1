const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'multi_step_checkout',
  password: 'password'
});

module.exports = connection;
