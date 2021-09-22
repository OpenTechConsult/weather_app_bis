const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (process.argv.length < 3) {
    console.log('A location was not provided. Try again by providing a location');
} else if (process.argv.length >= 3) {
    const cmdLineArg = process.argv[2];
    geoCode(cmdLineArg, (error, {longitude, latitude, location} = {}) => {
        if (error) {
            return console.log('Error', error);
        }
    
        forecast(longitude, latitude, (err, {temperature, feelslike}) => {
            if (err) {
                console.log('Error', err);
            }
            console.log('Here in ' + location + ' the temperature is ' + temperature + ' degrees Celsius but it feels like ' + feelslike + ' degrees Celsius');
        });
    });
}



