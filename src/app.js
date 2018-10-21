const express = require('express');
const renderer = require('express-react-views');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', renderer.createEngine());

app.get('/hello', require('./routes').hello);

module.exports = app;