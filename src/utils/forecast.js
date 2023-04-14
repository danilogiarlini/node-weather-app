const request = require('request')

const forecast = (latitude, longitude, callback) => {

    if(!latitude || !longitude){
        callback('Provide a valid address.', undefined)
    }

    const url = 'http://api.weatherstack.com/current?access_key=35bce6f4530f2dec6736cf512875224d&query=' + latitude + ',' + longitude + '&units=m'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%')
        }
    })
}


module.exports = forecast
