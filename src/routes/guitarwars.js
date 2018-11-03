const express = require('express');
const router = express.Router();
const guitarwars = require('../middleware/guitarwars');
const { getHeroes } = require('../middleware/guitarwars');

// router.post('/abduction-report', [
//   aliens.saveAbductionReport,
//   (req, res) => res.render('aliens/thanks', req.body)
// ]);

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


module.exports = router;