const React = require('react');
const DefaultLayout = require('../layouts/default');

const Thanks = (props) => (
  <DefaultLayout>
    <h1>Dear {props.firstname} {props.lastname}, thanks for your subscription!</h1>
    <p>You have sucessfully subscribed to Elvis‘ store email list.</p>
    <p><a href='/elvis-store/add-email'>ADd more contact data</a></p>
  </DefaultLayout>
);

module.exports = Thanks;