const express = require('express');
const router = express.Router();
const guitarwars = require('../middleware/guitarwars');

// router.post('/abduction-report', [
//   aliens.saveAbductionReport,
//   (req, res) => res.render('aliens/thanks', req.body)
// ]);

router.get('/', (req, res) =>
  res.render('guitarwars/index.jsx', {
    heroes: [{ name: 'LolMan', score: 200, date: (new Date()).toLocaleString() }]
  }));

module.exports = router;