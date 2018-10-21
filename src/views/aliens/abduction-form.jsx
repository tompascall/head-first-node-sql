const React = require('react');
const DefaultLayout = require('../layouts/default');

class AbductionForm extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>Aliens Abducted Me -  Report an Abduction</h1>
        <p>Share your story of alien abduction</p>
        <form method='post' action='/test-post'>
          <label htmlFor='firstname'>First Name:</label>
          <input name='firstname' defaultValue='tom'/><br/>
          <label htmlFor='lastname'>Last Name:</label>
          <input name='lastname' defaultValue='pascall'/><br/>
          <button type='submit' name='submit'>Send</button>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = AbductionForm;