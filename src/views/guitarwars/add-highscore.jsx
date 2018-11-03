const React = require('react');
const DefaultLayout = require('../layouts/default');

const AddHighscoresForm = (props) => (
  <DefaultLayout>
    <h1>Guitar Wars - Add your highscores</h1>
    <form
      method='post'
      action='/guitarwars/add-highscore'
      encType='multipart/form-data'
    >
      <label htmlFor='name'>Name:</label>
      <input name='name' required /><br/>
      <label htmlFor='score'>Score:</label>
      <input name='score'required /><br/>
      <label htmlFor='screenshot'>Screenshot:</label>
      <input name='screenshot' type='file' required/><br/>
      <button type='submit' name='submit'>Send</button>
    </form>
  </DefaultLayout>
);

module.exports = AddHighscoresForm;