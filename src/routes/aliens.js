const express = require('express');
const router = express.Router();
const aliens = require('../middleware/aliens');

router.get('/', (req, res) => {
  res.render('aliens/abduction-form');
});

router.post('/aliens/abduction-report', [
  // aliens.sendMail,
  aliens.saveAbductionReport,
  aliens.render
]);

module.exports = router;