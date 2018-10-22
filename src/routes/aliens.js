const express = require('express');
const router = express.Router();
const { sendMail } = require('../middleware/aliens');

router.get('/', (req, res) => {
  res.render('aliens/abduction-form');
});

router.post('/aliens/thanks', [
  // sendMail,
  (req, res) => res.render('aliens/thanks', req.body)
]);

module.exports = router;