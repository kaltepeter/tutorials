const {curry} = require('ramda');

const add = (x,y) => x + y;

const toPair = f  => ([x,y]) => f(x,y);

const fromPair = f => (x,y) => f([x,y]);

const flip = f => (y,x) => f(x,y);

// const curry = f => x => y => f(x,y);

const uncurry = f => (x,y) => f(x)(y);

const modulo = curry((x,y) => y % x);

const isOdd = modulo(2);

console.log(isOdd);

let result = fromPair(toPair(add))(1,2);
console.log(result);

result = flip(add)(1,3);
console.log(result);

const curriedAdd = curry(add);

const increment = num => add(1);

console.log(increment(2));

const filter = curry((f, xs) => xs.filter(f));

const getOdds = filter(isOdd);
console.log(getOdds([1,2,3,4,5,6]));

const replace = curry((regex, replacement, str) => str.replace(regex, replacement));
const replaceVowels = replace(/[AEIOU]/ig, '!');

console.log(replaceVowels('hello'));

const toUpper = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const first = xs => xs[0];

const compose = (f,g) => x => f(g(x));
// const compose = (f,g) => x => exclaim(toUpper(x));
// f . g = x => f(g(x));

const shout = compose(exclaim, toUpper);
// const shoutLetter = compose(first, compose(exclaim, toUpper)); // not working
const loudFirst = compose(toUpper, first);
const shoutLetter = compose(exclaim, loudFirst);

console.log(shout('tears'));
console.log(shoutLetter('tears'));

const log = curry((tag,x) => (console.log(tag,x), x));

const shout2 = compose(exclaim, log('here'), toUpper);
console.log(shout2('yo'));