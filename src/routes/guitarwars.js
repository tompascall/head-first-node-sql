const express = require('express');
const router = express.Router();
const guitarwars = require('../middleware/guitarwars');
const { getHeroes, saveHighscore, deleteHero, basicAuth } = require('../middleware/guitarwars');

router.get('/add-highscore', [
  (req, res) =>
    res.render('guitarwars/add-highscore.jsx', {
      heroes: res.locals.heroes
    })
]);

router.post('/add-highscore', [
  saveHighscore,
  (req, res) =>
    res.redirect('/guitarwars')
]);

router.get('/admin', [
  basicAuth,
  getHeroes,
  (req, res) => res.render('guitarwars/admin/heroes/list', {
    heroes: res.locals.heroes
  })
]);

router.post('/admin/heroes/delete/:id', [
  basicAuth,
  deleteHero((req, res) => req.params.id),
  (req, res) => res.render('guitarwars/feedback', {
    redirectTo: '/guitarwars/admin',
    message: `${res.locals.heroName}‘s entry has been successfully deleted`
  })
]);

router.get('/', [
  getHeroes,
  (req, res) =>
    res.render('guitarwars/index.jsx', {
      heroes: res.locals.heroes
    })
]);

module.exports = router;