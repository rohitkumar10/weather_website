const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1Ijoicm9oaXRrdW1hcjEwIiwiYSI6ImNrMDE0cHdrbDFsOGEzbG8xbTZqOHhha2sifQ.3z9SmgA2o77z4aIR4knCRA'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Change location' ,undefined)
        } else {
            callback(undefined, {
                  latitude: body.features[0].center[1],
                  longitude: body.features[0].center[0],
                  location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

/*const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1Ijoicm9oaXRrdW1hcjEwIiwiYSI6ImNrMDE0cHdrbDFsOGEzbG8xbTZqOHhha2sifQ.3z9SmgA2o77z4aIR4knCRA'

    request({ url:url, json: true}, (error,response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Change location' ,undefined)
        } else {
            callback(undefined, {
                  latitude: response.body.features[0].center[1],
                  longitude: response.body.features[0].center[0],
                  location: response.body.features[0].place_name
            })
        }
    })
}*/