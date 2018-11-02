const React = require('react');
const DefaultLayout = require('../layouts/default');

const SendEmailsForm = (props) => (
  <DefaultLayout>
    <h1>Send message to email list</h1>
    <form method='post' action='/elvis-store/send-emails'>
      <label htmlFor='subject'>Subject:</label>
      <input
        name='subject'
        placeholder='subject'
        defaultValue={props.subject}
        className={ props.invalid ? 'input-error' : '' }
        required
      />
      <br/>
      <label htmlFor='message'>Message:</label>
      <textarea
        name='message'
        rows='8'
        cols='60'
        placeholder='Enter message'
        defaultValue={props.message}
        className={ props.invalid ? 'input-error' : '' }
        required
      /><br/>
      <button type='submit' name='submit'>SEND</button>
    </form>
  </DefaultLayout>
);

module.exports = SendEmailsForm;