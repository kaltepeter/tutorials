const request = require('request');
const darkSkyApiKey = process.env.DARKSKY_API_KEY;

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/${darkSkyApiKey}/${latitude},${longitude}`;
    request({url, json: true}, (error, { body: {error:apiError, daily, currently} } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (apiError) {
            callback('Unable to find location for forecast!');
        } else {
            const {temperature, precipProbability} = currently;
            const today = daily.data[0];
            callback(undefined, `${today.summary} It is currently ${temperature} degrees out. The high today is ${today.temperatureHigh} with a low of ${today.temperatureLow}. There is a ${Math.round(precipProbability * 100)}% chance of rain.`);
        }
    });
};

module.exports = forecast;