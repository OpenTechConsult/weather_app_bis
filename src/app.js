const path = require('path');
const express = require('express');
const app = express();

const publicDirectory = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Application',
        name: 'Sandro Agboka',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Sandro Agboka',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Welcome to the Help Page.',
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: { name: 'Gbadago', country: 'Togo'},
        current: { temperature: 88, humidity: 71}
    });
})

app.listen(3000, () => {
    console.log('Server is up and listening on http://localhost:3000');
});
