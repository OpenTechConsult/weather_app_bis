const path = require('path');
const express = require('express');
const hbs = require('hbs');

// require the geocode and the forecast module
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// load in an express app
const app = express();

// define the port to user by the server
const port = process.env.PORT || 3000;

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
    if (!req.query.address) {
        return res.send({
            error: 'Please enter the address'
        });
    }

    geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
        if (error) {
            return res.send({
                error: error
            });
        }

        forecast(longitude, latitude, (err, {temperature, feelslike}) => {
            if (err) {
                return res.send({
                    err: err
                });
            }

            res.send({
                location: location,
                temperature: temperature,
                feelslike: feelslike
            });
        });
    });
});

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

app.listen(port, () => {
    console.log(`Server is up and listening on http://localhost:${port}`);
});