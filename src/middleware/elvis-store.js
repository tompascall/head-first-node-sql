const mail = require('../utils/mail');
const sql = require('../utils/sql');

exports.saveContactData = (req, res, next) => {
  const { body: {
    firstname,
    lastname,
    email
  } } = req;
  const connection = sql.getConnection('elvis_store');
  connection.connect();
  connection.query(`INSERT INTO email_list (first_name, last_name, email)
    VALUES ("${firstname}", "${lastname}", "${email}")`,
    (error, results, fields) => {
      if (error) throw error;
    });
  connection.end();
  next();
}

exports.render = (req, res) => res.render('elvis-store/thanks', req.body);