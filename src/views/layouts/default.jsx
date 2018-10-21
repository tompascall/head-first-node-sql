const React = require('react');

const globalStyle = `
  body {
    font-family: monospace;
  }
`;

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title>
          <style>{ globalStyle }</style>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;