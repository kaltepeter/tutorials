const {curry} = 'ramda';

const add = (x,y) => x + y;

const toPair = f  => ([x,y]) => f(x,y);

const fromPair = f => (x,y) => f([x,y]);

const flip = f => (y,x) => f(x,y);

const curry = f => x => y => f(x,y);

const uncurry = f => (x,y) => f(x)(y);

const modulo = curry((x,y) => y % x);

const isOdd = modulo(2);

console.log(isOdd());

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