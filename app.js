const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=83feab2a74815c77e3bc05ec4ddb999d&query=6.1375,1.2123'
request({url: url}, (err, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})