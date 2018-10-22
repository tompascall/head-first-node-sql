const mail = require('../utils/mail');

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