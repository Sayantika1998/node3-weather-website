const request = require('request')

const geocode = (address, callback) => {
const url = 'http://api.positionstack.com/v1/forward?access_key=e8180affe5e1b690162ef94607e59448&query='+encodeURI(address)+'&output=json&limit=1'
//encodeURI -> if someone searches for a location that contains special characters that actually mean something in a URL structure. With encodeURI ? becomes %3F. This is a safe URL. Mapbox is going to be able to get it, decode it, and handle the request correctly.

    request({ url, json: true }, (error, {body}) => {
        if (error)           //no network
        {
            callback('Unable to connect to location services', undefined)
        } 
        else if (!body.data)           //invalid input
        {
            callback('Unable to find location.', undefined)
        } 
        else 
        {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }
    })
}

module.exports = geocode