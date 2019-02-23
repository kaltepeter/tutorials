const express = require('express');
const app = express();

app.use(express.static('public'));

const cities = require('./routes/cities');
app.use('/cities', cities);

module.exports = app;
