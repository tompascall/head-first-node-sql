const React = require('react');
const DefaultLayout = require('../layouts/default');

const SendEmailsForm = (props) => (
  <DefaultLayout>
    <h1>Send message to email list</h1>
    <form method='post' action='/elvis-store/send-emails'>
      <label htmlFor='subject'>Subject:</label>
      <input name='subject' placeholder='subject'/><br/>
      <label htmlFor='message'>Message:</label>
      <textarea name='message' rows='8' cols='60' placeholder='Enter message'/><br/>
      <button type='submit' name='submit'>SEND</button>
    </form>
  </DefaultLayout>
);

module.exports = SendEmailsForm;