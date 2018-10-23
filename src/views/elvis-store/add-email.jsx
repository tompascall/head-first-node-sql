const React = require('react');
const DefaultLayout = require('../layouts/default');

const AddEmailForm = (props) => (
  <DefaultLayout>
    <h1>MakeMeElvis.com</h1>
    <p>Enter you contact data to be added to the <strong>Make Me Elvis</strong> mailing list:</p>
    <form method='post' action='/elvis-store/add-email'>
      <label htmlFor='firstname'>First Name:</label>
      <input name='firstname' defaultValue='tom'/><br/>
      <label htmlFor='lastname'>Last Name:</label>
      <input name='lastname' defaultValue='pascall'/><br/>
      <label htmlFor='email'>Email address:</label>
      <input name='email' type='email' defaultValue='tompascall@gmail.com'/><br/>
      <button type='submit' name='submit'>Send</button>
    </form>
  </DefaultLayout>
);

module.exports = AddEmailForm;