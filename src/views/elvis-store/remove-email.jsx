const React = require('react');
const DefaultLayout = require('../layouts/default');

const RemoveEmailForm = (props) => (
  <DefaultLayout>
    <h1>Remove email from the mailing list</h1>
    <form method='post' action='/elvis-store/remove-email'>
      <label htmlFor='email'>Email:</label>
      <input name='email' type='email' placeholder='Email address'/><br/>
      <button type='submit' name='submit'>REMOVE</button>
    </form>
  </DefaultLayout>
);

module.exports = RemoveEmailForm;