const request = require('request');
const darkSkyApiKey = process.env.DARKSKY_API_KEY;

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/${darkSkyApiKey}/${latitude},${longitude}`;
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (response.body.error) {
            callback('Unable to find location for forecast!');
        } else {
            const currently = response.body.currently;
            const today = response.body.daily.data[0];
            callback(undefined, `${today.summary} It is currently ${currently.temperature} out. There is a ${currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;