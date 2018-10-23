const express = require('express');
const router = express.Router();
const elvisStore = require('../middleware/elvis-store');


router.get('/subscribe', (req, res) => {
  res.render('elvis-store/subscribe');
});

router.get('/', (req, res) => {
  res.render('elvis-store/subscribe');
});

router.post('/subscribe', [
  elvisStore.saveContactData,
  (req, res) => res.render('elvis-store/thanks', req.body)
]);

router.get('/send-emails', [
  (req, res) => res.render('elvis-store/send-emails')
]);

router.post('/send-emails', [
  elvisStore.getContacts,
  elvisStore.sendMails,
  (req, res) => res.render('elvis-store/send-emails-feedback', { feedback: res.locals.sendEmailFeedback })
]);

module.exports = router;