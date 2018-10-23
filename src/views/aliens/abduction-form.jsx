const React = require('react');
const DefaultLayout = require('../layouts/default');

const AbductionForm = (props) => (
  <DefaultLayout>
    <div className='aliens-form'>
      <h1>Aliens Abducted Me -  Report an Abduction</h1>
      <p>Share your story of alien abduction</p>
      <form method='post' action='/aliens/abduction-report'>
        <label htmlFor='firstname'>First Name:</label>
        <input name='firstname' defaultValue='tom'/><br/>
        <label htmlFor='lastname'>Last Name:</label>
        <input name='lastname' defaultValue='pascall'/><br/>
        <label htmlFor='email'>Email address:</label>
        <input name='email' type='email' defaultValue='tompascall@gmail.com'/><br/>
        <label htmlFor='whenithappened'>When did it happen?</label>
        <input name='whenithappened' type='date' defaultValue='2011-12-23'/><br/>
        <label htmlFor='howlong'>How long were you gone?</label>
        <input name='howlong' defaultValue='2 days'/><br/>
        <label htmlFor='howmany'>How many did you see?</label>
        <input name='howmany' type='number' defaultValue='5'/><br/>
        <label htmlFor='aliendescription'>Describe them:</label>
        <input name='aliendescription' defaultValue='Greens and with 2 eyes'/><br/>
        <label htmlFor='whattheydid'>What did they do</label>
        <input name='whattheydid' defaultValue='Enlightened me'/><br/>
        <label htmlFor='fangspotted'>Have you seen my dog Fang?</label><br/>
        Yes <input name='fangspotted' type='radio' defaultValue='Yes'/>
        No <input name='fangspotted' type='radio' defaultValue='No' defaultChecked/><br/>
        <label htmlFor='other'>Anything else you want to add:</label>
        <textarea name='other' type='textarea' defaultValue=''/><br/>
        <button type='submit' name='submit'>Send</button>
      </form>
    </div>
  </DefaultLayout>
);

module.exports = AbductionForm;