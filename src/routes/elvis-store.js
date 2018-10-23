const express = require('express');
const router = express.Router();
const elvisStore = require('../middleware/elvis-store');

router.get('/', (req, res) => {
  res.render('elvis-store/add-email');
});

router.post('/add-email', [
  elvisStore.saveContactData,
  elvisStore.render
]);

module.exports = router;