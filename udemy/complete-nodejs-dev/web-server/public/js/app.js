const weatherAPI = 'http://localhost:3000/weather';

const fetchWeather = async (address) => {
    try {
        const response = await fetch(`${weatherAPI}?address=${address}`);
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
};

const weatherForm = document.querySelector('form');
const searchElem = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = searchElem.value;
    fetchWeather(location);
});