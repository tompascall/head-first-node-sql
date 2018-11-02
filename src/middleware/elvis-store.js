const _get = require('lodash/get');
const mail = require('../utils/mail');
const sql = require('../utils/sql');

const sendMail = (to, subject, message) => {
  console.log(`Sending email to ${to}`);
};

exports.saveContactData = (req, res, next) => {
  const { body: {
    firstname,
    lastname,
    email
  } } = req;
  const connection = sql.getConnection('elvis_store');
  connection.connect();
  connection.query(`INSERT INTO email_list (first_name, last_name, email)
    VALUES (?, ?, ?)`,[firstname, lastname, email],
    (error, results, fields) => {
      if (error) throw error;
    });
  connection.end();
  next();
};

exports.getContacts = (req, res, next) => {
  const connection = sql.getConnection('elvis_store');
  connection.connect();
  connection.query(`SELECT DISTINCT * from email_list`,
    (error, results, fields) => {
      if (error) throw error;
      res.locals.contacts = results;
      next();
    });
  connection.end();
};

exports.getRows = (req, res, next) => {
  const connection = sql.getConnection('elvis_store');
  connection.connect();
  connection.query(`SELECT * from email_list`,
    (error, results, fields) => {
      if (error) throw error;
      res.locals.rows = results;
      next();
    });
  connection.end();

}

exports.sendMails = (req, res, next) => {
  console.log('message', req.body.message);
  console.log('subject', req.body.subject);
  _get(res.locals, 'contacts', []).forEach(contact => {
    sendMail(contact.email, req.body.subject, req.body.message);
  });
  res.locals.sendEmailFeedback = 'Emails have been successfully sent!';
  next();
};

exports.removeEmails = (emailGetter) => (req, res, next) => {
  const email = emailGetter(req);
  const connection = sql.getConnection('elvis_store');
  connection.connect();
  const ids = Object.keys(req.body)
    .filter(key => key.split('-')[0] === 'id')
    .map(key => req.body[key]);
  Promise.all(ids.map(id => {
    return connection.query(`DELETE from email_list WHERE id=?`, [id],
      (error, results, fields) => {
        if (error) throw error;
      });
  }))
    .then(_ => {
      res.locals.removeEmailFeedback = 'Email have been successfully removed';
    })
    .catch(e => {
      res.locals.removeEmailFeedback = 'Sorry, we could not remove email';
    })
    .then(() => {
      connection.end();
      next();
    });
};

exports.isValidSendMailData = (req, res) => !!(req.body.subject && req.body.message);