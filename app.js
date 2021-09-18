const request = require('request')

const weatherStackUrl = `http://api.weatherstack.com/current?access_key=83feab2a74815c77e3bc05ec4ddb999d&query=6.1375,1.2123&units=f`

request({ url: weatherStackUrl, json: true}, (err, response) => {
    if (err) {
        console.log('Unable to connect to weather API')
    } else if (response.body.error) {
        console.log('Unable to find location!')
    } else {
        const temperature = response.body.current.temperature
        const feelsLike = response.body.current.feelslike
        console.log(`It is ${temperature}° but it feels like ${feelsLike}°`)
    }
    
})

const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib3BlbnRlY2hjb25zdWx0IiwiYSI6ImNrdGozamRncTE3eHEyb2pvdTcyMTB3YTAifQ._G-Ff_bRHIW5AuuS1Miipg`

request({url: geoCodeUrl, json: true}, (err, response) => {
    if (err) {
        console.log('Unable to connect to mapbox geocode API')
    } else if (response.body.message) {
        console.log('Location not found')
    } else {
        const place_name = response.body.features[0].place_name
        const [longitude, latitude] = response.body.features[0].center
        console.log(`${place_name} is at longitude ${longitude} and latitude ${latitude}`)
    }
})


