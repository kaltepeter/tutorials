const request = require('request');
const darkSkyApiKey = process.env.DARKSKY_API_KEY;
const darkSkyLoc = process.env.DARKSKY_LOC;

const url = `https://api.darksky.net/forecast/${darkSkyApiKey}/${darkSkyLoc}`;

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data);
});