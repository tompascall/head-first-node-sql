const sql = require('../utils/sql');
const path = require('path');
const basicAuth = require('express-basic-auth');

exports.getHeroes = (req, res, next) => {
  const connection = sql.getConnection('guitarwars');
  connection.connect();
  connection.query(`SELECT * from guitarwars ORDER BY score DESC, date ASC`,
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

exports.deleteHero = (getId) => async (req, res, next) => {
  const id = Number(getId(req, res));
  const connection = sql.getConnection('guitarwars');
  connection.connect();
  await connection.query(`SELECT * FROM guitarwars WHERE id=?`, [
    id
  ], (error, results, fields) => {
    if (error) throw error;
    res.locals.heroName = results[0].name;
  });
  await connection.query(`DELETE FROM guitarwars WHERE id=?`, [
    id,
  ], (error, results, fields) => {
    if (error) throw error;
    next();
  });

  connection.end();
};

exports.basicAuth = basicAuth({
  users: { 'admin': 'password' },
  challenge: true,
  realm: 'guitarwar-admin',
});

