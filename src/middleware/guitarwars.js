const sql = require('../utils/sql');
const path = require('path');

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

exports.saveHighscore = (req, res, next) => {
  const { screenshot } = req.files;
  const fileName = `${Date.now()}-${screenshot.name}`;
  const filePath = path.join(global.appRoot, 'assets', 'screenshots', fileName);
  screenshot.mv(filePath);
  const connection = sql.getConnection('guitarwars');
  connection.connect();
  connection.query(`INSERT INTO guitarwars (name, score, screenshot) VALUES (?, ?, ?)`, [
    req.body.name,
    req.body.score,
    fileName,
  ],
    (error, results, fields) => {
      if (error) throw error;
      next();
    });
  connection.end();
};