const React = require('react');
const DefaultLayout = require('../layouts/default');

class Thanks extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Thanks!</div>
      </DefaultLayout>
    );
  }
}

module.exports = Thanks;