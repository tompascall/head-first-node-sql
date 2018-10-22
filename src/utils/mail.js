const nodemailer = require('nodemailer');
const SENDMAIL = process.env.SENDMAIL;

const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: SENDMAIL
});

const mail = (from, to, subject, message) =>
  transporter.sendMail({
    from,
    to,
    subject,
    text: message
  }, (err, info) => {
    if (err) {
      console.log('ERROR during sending mail', err);
    }
    console.log(info.envelope);
    console.log(info.messageId);
  });

module.exports = mail;