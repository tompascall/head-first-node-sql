const mysql = require('mysql');
const { MYSQL_USER, MYSQL_PWD } = process.env;

if (!(MYSQL_USER && MYSQL_PWD)) {
  throw new Error('You should set MYSQL_USER and MYSQL_PWD in your env to connect to daatabase');
}

exports.getConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: MYSQL_USER,
    password: MYSQL_PWD,
    database: 'aliendatabase'
  });
};
