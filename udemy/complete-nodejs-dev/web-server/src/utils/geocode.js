const request = require('request');
const mapboxApiKey = process.env.MAPBOX_API_KEY;

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxApiKey}&limit=1`;
    request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services!');
        } else if (body.features.length <= 0) {
            callback(`Unable to find location. Try another search.`);
        } else {
            const [longitude, latitude] = body.features[0].center;
            const location = body.features[0].place_name;
            callback(undefined, {latitude, longitude, location});
        }
    });
};

module.exports = geocode;