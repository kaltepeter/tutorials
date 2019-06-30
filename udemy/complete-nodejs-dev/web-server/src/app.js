const path = require('path');
const express = require('express');

// define paths
const publicDirectoryPath = path.join(__dirname, '..', 'public');
const viewsPath = path.join(__dirname, '..', 'templates');

const app = express();

// setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// setup static dir to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Help message'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philidelphia'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});