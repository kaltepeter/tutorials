const https = require('https');
const darkSkyApiKey = process.env.DARKSKY_API_KEY;

const url = `https://api.darksky.net/forecast/${darkSkyApiKey}/40,-75`;
const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(chunk);
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.error(error);
});

request.end();