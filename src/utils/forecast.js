const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a6d4846167c6fa8990c73d8ac427101d/' + longitude + ',' + latitude

    request({ url, json: true},(error, {body}) => {
        if(error) {
            callback('Unable to connnect weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.precipProbability + '% chance of raining')
        }
    })
}

module.exports = forecast

/*const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a6d4846167c6fa8990c73d8ac427101d/' + longitude + ',' + latitude

    request({ url:url, json: true},(error, response) => {
        if(error) {
            callback('Unable to connnect weather services', undefined)
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.precipProbability + '% chance of raining')
        }
    })
}*/