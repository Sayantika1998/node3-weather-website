const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a5879afca597859ac599ebd762a31cf0&query='+latitude+','+longitude+'&units=f'
    
        request({ url, json: true }, (error, {body}) => {
            if (error)           //no network
            {
                callback('Unable to connect to weather services', undefined)
            } 
            else if (body.error)           //invalid input
            {
                callback('Unable to find location.', undefined)
            } 
            else 
            {
                callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees fahrenheit.")
            }
        })
    }
    
    module.exports = forecast
