const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=83feab2a74815c77e3bc05ec4ddb999d&query=6.1375,1.2123'
request({url: url, json: true}, (err, response) => {
    const currentWeatherData = response.body.current
    console.log(`It is currently ${currentWeatherData.temperature} degrees out. It feels like ${currentWeatherData.feelslike}.`)
})
