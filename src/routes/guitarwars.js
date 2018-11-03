const express = require('express');
const router = express.Router();
const guitarwars = require('../middleware/guitarwars');
const { getHeroes, saveHighscore } = require('../middleware/guitarwars');

router.get('/', [
  getHeroes,
  (req, res) =>
    res.render('guitarwars/index.jsx', {
      heroes: res.locals.heroes
    })
]);

router.get('/add-highscore', [
  (req, res) =>
    res.render('guitarwars/add-highscore.jsx', {
      heroes: res.locals.heroes
    })
]);

router.post('/add-highscore', [
  saveHighscore,
  getHeroes,
  (req, res) =>
    res.render('guitarwars/index.jsx', {
      heroes: res.locals.heroes
    })
]);


module.exports = router;