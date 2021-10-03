const request = require('request');

const geoCode = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1Ijoib3BlbnRlY2hjb25zdWx0IiwiYSI6ImNrdGozamRncTE3eHEyb2pvdTcyMTB3YTAifQ._G-Ff_bRHIW5AuuS1Miipg`;

    request({ url, json: true}, (error, {body}) => {
        if (error) { 
            callback('Unable to connect to location service');
        } else if (body.features.length === 0) {
            callback('Unable to find location, try another search');
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    });
}

module.exports = geoCode;