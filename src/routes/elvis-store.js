const express = require('express');
const router = express.Router();
const elvisStore = require('../middleware/elvis-store');
const { conditionalMiddleware } = require('../utils/middleware');
const { compose } = require('compose-middleware');

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
  conditionalMiddleware(elvisStore.isValidSendMailData,
    compose([
      elvisStore.getContacts,
      elvisStore.sendMails,
      (req, res) =>
        res.render('elvis-store/feedback', {
          feedback: res.locals.sendEmailFeedback
        })
    ])),
  (req, res, next) => res.render('elvis-store/send-emails', {
    subject: req.body.subject,
    message: req.body.message,
    invalid: !(req.body.subject && req.body.message)
  })
]);

router.get('/remove-emails', [
  elvisStore.getRows,
  (req, res) => res.render('elvis-store/remove-emails', { rows: res.locals.rows })
]);

router.post('/remove-emails', [
  elvisStore.removeEmails((req) => req.body['email-ids']),
  (req, res) => res.render('elvis-store/feedback', { feedback: res.locals.removeEmailFeedback })
]);

module.exports = router;