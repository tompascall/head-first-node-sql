const React = require('react');
const DefaultLayout = require('../layouts/default');

const Feedback = (props) => {
  return (<DefaultLayout>
    <h1>{ props.message }</h1>
    <a className='button' href={ props.redirectTo }>
      <div>OK</div>
    </a>
  </DefaultLayout>)
}

module.exports = Feedback;