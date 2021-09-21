const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('Philadelphia', (error, data) => {
    if (error) {
        return console.log('Error', error);
    }

    forecast(data.longitude, data.latitude, (err, forecastData) => {
        if (err) {
            console.log('Error', err);
        }
        console.log('Here in ' + data.location + ' the temperature is ' + forecastData.temperature + ' degrees Celsius but it feels like ' + forecastData.feelsLike + ' degrees Celsius');
    });
});


