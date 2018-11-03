const sql = require('../utils/sql');

exports.getHeroes = (req, res, next) => {
  const connection = sql.getConnection('guitarwars');
  connection.connect();
  connection.query(`SELECT * from guitarwars`,
    (error, results, fields) => {
      if (error) throw error;
      res.locals.heroes = results;
      next();
    });
  connection.end();
};