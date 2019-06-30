const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const address = process.argv[2];
// const darkSkyLoc = process.env.DARKSKY_LOC;
// const [lat, long] = darkSkyLoc;

if (!address) {
    console.error('Please provide an address.');
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.error(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.error(error);
            }

            console.log(location);
            console.log(forecastData);
        });
    });
}