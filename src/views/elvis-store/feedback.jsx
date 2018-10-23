const React = require('react');
const DefaultLayout = require('../layouts/default');

const Feedback = (props) => (
  <DefaultLayout>
    <h1>{props.feedback}</h1>
  </DefaultLayout>
);

module.exports = Feedback;