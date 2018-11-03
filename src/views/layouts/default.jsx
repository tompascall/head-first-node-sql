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
    vertical-align: top;
  }
  input, textarea {
    margin-bottom: 10px;
    outline: none;
    border-radius: 20px;
    height: 25px;
    width: 30%;
  }
  ::placeholder {
    opacity: 0.7;
  }
  button {
    width: 200px;
    height: 70px;
    border-radius: 50px;
    color: white;
    background: red;
    border: 1px black;
    box-shadow: 2px 2px 5px #888888;
    font-size: 25px;
    font-weight: 100;
    letter-spacing: 1px;
    cursor: pointer;
    transition: box-shadow .1s, letter-spacing 0.1s;
    margin: 20px auto;
    display: block;
    outline: none;
  }
  button:hover {
    box-shadow: 4px 2px 5px #888888;
    letter-spacing: 1.2px;
  }
  button:active {
    box-shadow: 1px 1px 1px #888888;
    letter-spacing: .8px;
  }
  .input-error {
    border: 1px solid red;
  }
  table {
    width:100%;
  }
  table, th, td {
      // border: 1px solid black;
      border-collapse: collapse;
  }
  th, td {
      padding: 15px;
      text-align: left;
  }
  table tr:nth-child(even) {
      background-color: #eee;
  }
  table tr:nth-child(odd) {
    background-color: #fff;
  }
  table th {
      background-color: black;
      color: white;
  }
`;

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{__html: globalStyle }} />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;