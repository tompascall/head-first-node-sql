const express = require('express');
const renderer = require('express-react-views');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', renderer.createEngine());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', routes.index);

app.post('/test-post', routes.testPost);

app.get('/hello', routes.hello);

module.exports = app;