const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Andrew',
        age: 27
    });
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
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
