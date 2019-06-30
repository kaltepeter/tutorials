const request = require('request');
const darkSkyApiKey = process.env.DARKSKY_API_KEY;
const darkSkyLoc = process.env.DARKSKY_LOC;

const url = `https://api.darksky.net/forecast/${darkSkyApiKey}/${darkSkyLoc}`;

request({url: url, json: true}, (error, response) => {
    const currently = response.body.currently;
    const today = response.body.daily.data[0];
    console.log(`${today.summary} It is currently ${currently.temperature} out. There is a ${currently.precipProbability}% chance of rain.`);
});