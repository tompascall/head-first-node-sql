const express = require('express');
const router = express.Router();
const aliens = require('../middleware/aliens');

router.post('/abduction-report', [
  aliens.saveAbductionReport,
  (req, res) => res.render('aliens/thanks', req.body)
]);

router.get('/', (req, res) =>
  res.render('aliens/abduction-form'));

module.exports = router;