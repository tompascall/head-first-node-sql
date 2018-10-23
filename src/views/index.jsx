const React = require('react');
const DefaultLayout = require('./layouts/default');

const Index = (props) => (
  <DefaultLayout title='Index of contents'>
    <h1>Index of contents</h1>
    <ul>
      <li><a href='/aliens'>Aliens</a></li>
      <li><a href='/elvis-store'>Elvis‘ store</a></li>
    </ul>
  </DefaultLayout>
);

module.exports = Index;