const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const weatherStackUrl = `http://api.weatherstack.com/current?access_key=83feab2a74815c77e3bc05ec4ddb999d&query==${latitude},${longitude}`;

    request({ url: weatherStackUrl, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weatherstack API');
        } else if (response.body.error) {
            callback('Unable to fetch the weather\'s forecast for the given location');
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                feelsLike: response.body.current.feelsLike,
                location: response.body.location.name,
                description: response.body.current.weather_descriptions[0]
            });
        }
    });
};

module.exports = forecast;