console.log('Client side javascript file is loaded.');
const weatherAPI = 'http://localhost:3000/weather';

(async () => {
    try {
        const response = await fetch('http://puzzle.mead.io/puzzle');
        // console.log(response);
        const data = await response.json();
        console.log(data);
    } catch(e) {
        console.error(e);
    }
})();

(async () => {
    try {
        const response = await fetch(`${weatherAPI}?address=boston`);
        const data = await response.json();
        if (data.error) {
            console.error(data.error);
        } else {
            const {location, forecast} = data;
            console.log(location, forecast);
        }
    } catch(e) {
        console.error(e);
    }
})();