const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('Philadelphia', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

forecast(7788, 88999, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});