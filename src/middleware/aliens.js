const mail = require('../utils/mail');
const sql = require('../utils/sql');

exports.sendMail = (req, res, next) => {
  const { body: form } = req;
  const message = `${form.firstname} ${form.lastname}
    Abducted ${form.whenithappened}
    Gone for ${form.howlong}
    Number of aliens: ${form.howmany}
    Alien description: ${form.aliendescription}
    What they did: ${form.whattheydid}
    Fang spotted: ${form.fangspotted}`;
    mail(form.email, 'tompascall@gmail.com', 'Abduction alert', message);
    next();
};

exports.saveAbductionReport = (req, res, next) => {
  const { body: {
    firstname,
    lastname,
    whenithappened,
    howlong,
    howmany,
    aliendescription,
    whattheydid,
    fangspotted,
    other,
    email
  } } = req;
  const connection = sql.getConnection();
  connection.connect();
  connection.query(`INSERT INTO aliens_abduction (
    first_name, last_name, when_it_happened, how_long, how_many,
    alien_description, what_they_did, fang_spotted, other, email)
    VALUES ("${firstname}", "${lastname}", "${whenithappened}", "${howlong}", "${howmany}",
      "${aliendescription}", "${whattheydid}", "${fangspotted}",
      "${other || 'Nothing special'}", "${email}")`,
    (error, results, fields) => {
      if (error) throw error;
    });
  connection.end();
  next();
}

exports.render = (req, res) => res.render('aliens/thanks', req.body);