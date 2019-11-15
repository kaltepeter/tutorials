// import {apiKey} from './apiKey.js';
// import {Task} from '../types';
// const moment = require('moment');
import * as R from 'ramda'
const compose = R.compose;

const apiKey = process.env('apiKey');

const makeWeatherUrl = zip => `http://samples.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`;

const fetchIt = url => Task((rej, res) => 
    fetch(url)
        .then(x => x.json())
        .then(res)
        .catch(rej));

// fetchIt(`http://samples.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`)
//     .map(res => console.log(res));

const OpenWeather = {
    fetch: compose(fetchIt, makeWeatherUrl)
};

const Weather = (dt, temp) => ({
    dt,
    temp
});

const toFahrenheit = k => k + 1000;

const toWeather = (dt, temp) => Weather(new Date(dt).toLocaleDateString(), toFahrenheit(temp));

const prepareItems = json => json.list.map(w => toWeather(w.dt, w.main.temp));

const toLi = weather => `<li>${weather.dt} ${weather.temp}</li>`

const getWeatherItems = zip => OpenWeather.fetch(zip)
    .map(json => prepareItems(json.list))
    .map(weathers => weathers.map(toLi));

const app = () => {
    const goBtn = document.getElementById('go');
    const input = document.getElementById('zip');
    const results = document.getElementById('results');

    goBtn.addEventListener('click', () => {
        const zipCode = input.value.trim();
        getWeatherItems(zipCode).fork(console.error, html => {
            results.innerHTML = html
        });
    });
}

app();