const request = require('request');
const darkSkyApiKey = process.env.DARKSKY_API_KEY;
const darkSkyLoc = process.env.DARKSKY_LOC;
const mapboxApiKey = process.env.MAPBOX_API_KEY;

const url = `https://api.darksky.net/forecast/${darkSkyApiKey}/${darkSkyLoc}`;

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         const currently = response.body.currently;
//         const today = response.body.daily.data[0];
//         console.log(`${today.summary} It is currently ${currently.temperature} out. There is a ${currently.precipProbability}% chance of rain.`);
//     }
// });

const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angelos.json?access_token=${mapboxApiKey}&limit=1`;
request({url: geocodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log(`Unable to connect to location services!`);
    } else if (response.body.features.length <= 0) {
        console.log(`Unable to find location. Try another search.`);
    } else {
        const [latitude, longitude] = response.body.features[0].center;
        console.log(latitude, longitude);
    }
});