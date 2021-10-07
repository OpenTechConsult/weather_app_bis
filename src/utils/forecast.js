const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=83feab2a74815c77e3bc05ec4ddb999d&query==${latitude},${longitude}`;

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weatherstack API');
        } else if (body.error) {
            callback('Unable to fetch the weather\'s forecast for the given location');
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                location: body.location.name,
                description: body.current.weather_descriptions[0], 
                humidity: body.current.humidity,
            });
        }
    });
};

module.exports = forecast;