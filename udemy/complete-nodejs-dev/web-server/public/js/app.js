const weatherAPI = 'http://localhost:3000/weather';

const fetchWeather = async (address) => {
    const response = await fetch(`${weatherAPI}?address=${address}`);
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    } else {
        const {location, forecast} = data;
        return {location, forecast};
    }
};

const weatherForm = document.querySelector('form');
const searchElem = document.querySelector('input');
const messageOneElem = document.querySelector('#message-1');
const messageTwoElem = document.querySelector('#message-2');

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const location = searchElem.value;
    if (location) {
        try {
            messageOneElem.textContent = 'Loading...';
            const weatherData = await fetchWeather(location);
            messageOneElem.textContent = weatherData.location;
            messageTwoElem.textContent = weatherData.forecast;
        } catch (e) {
            console.log(e);
            messageOneElem.textContent = e.toString();
        }
    }
});