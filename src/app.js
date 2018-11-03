const express = require('express');
const renderer = require('express-react-views');
const app = express();
const bodyParser = require('body-parser');
const aliens = require('./routes/aliens');
const elvisStore = require('./routes/elvis-store');
const guitarwars = require('./routes/guitarwars');

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', renderer.createEngine());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/aliens', aliens);

app.use('/elvis-store', elvisStore);

app.use('/guitarwars', guitarwars);

app.use('/', (req, res) => res.render('index'));

module.exports = app;