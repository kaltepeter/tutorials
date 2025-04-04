import {Observable} from 'rxjs';
import {loadWithFetch, load} from './loader';

let output = document.getElementById('output');
let button = document.getElementById('button');

let click = Observable.fromEvent(button, 'click');

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement('div');
        div.innerText = m.title;
        output.appendChild(div);
    });
}

let subscription = load('moviess.json')
    .subscribe(renderMovies,
        e => console.log(`error: ${e}`),
        () => console.log('Complete!')
    );

console.log(subscription);
//subscription.unsubscribe();

click.flatMap(e => load('movies.json'))
    .subscribe(
        renderMovies,
        e => {
            console.log(`error: ${e}`);
        },
        () => {
            console.log("complete");
        }
    );