const React = require('react');
const DefaultLayout = require('../layouts/default');

const Thanks = (props) => (
  <DefaultLayout>
    <h1>Thanks for submitting the form!</h1>
    <p>
      <span>You were abducted { props.whenithappened }</span>
      <span> and were gone for { props.howlong }</span>
    </p>
    <p>Describe them: { props.aliendescription }</p>
    <p>Was Fang there? { props.fangspotted }</p>
    <p>Your email address is: { props.email }</p>
  </DefaultLayout>
);

module.exports = Thanks;