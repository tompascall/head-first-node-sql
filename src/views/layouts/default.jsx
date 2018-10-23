const React = require('react');

const globalStyle = `
  body {
    font-family: monospace;
  }
  a {
    text-decoration: none;
    color: orange;
    transition: color .1s;
  }
  a:hover {
    color: red;
  }
  ul {
    list-style-type: none;
  }
  label {
    margin-right: 10px;
  }
  input {
    margin-bottom: 10px;
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