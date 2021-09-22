const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (process.argv.length < 3) {
    console.log('A location was not provided. Try again by providing a location');
} else if (process.argv.length >= 3) {
    const cmdLineArg = process.argv[2];
    geoCode(cmdLineArg, (error, data) => {
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
}



