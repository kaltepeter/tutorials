const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const darkSkyLoc = process.env.DARKSKY_LOC;
const [lat, long] = darkSkyLoc;

geocode('Boston', (error, data) => {
    console.log(`Error: `, error);
    console.log(`Data: `, data);
});

forecast(lat, long, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
});