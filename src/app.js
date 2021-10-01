const path = require('path');
const express = require('express');
const hbs = require('hbs');

// load in an express app
const app = express();

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// Setup static directory to use
app.use(express.static(publicDirectory));


// define the different routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Application',
        name: 'Sandro Agboka',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Sandro Agboka',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Welcome to the Man Page.',
        title: 'Help Page',
        name: 'Sandro Agboka',
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: { name: 'Gbadago', country: 'Togo'},
        current: { temperature: 88, humidity: 71}
    });
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        message: 'Help article not found.'
    });
});

app.get('*', (req, res) => {
    res.render('error', {
        title: '404 Error Page',
        name: 'Opentech Consult',
        message: 'The resource requested cannot be found on this server.'
    });
});

app.listen(3000, () => {
    console.log('Server is up and listening on http://localhost:3000');
});