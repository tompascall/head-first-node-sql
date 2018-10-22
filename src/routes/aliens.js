const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('aliens/abduction-form');
});

router.post('/test-post', (req, res) => {
  console.log('POSTING', req.body)
  res.render('aliens/thanks', req.body);
});

module.exports = router;