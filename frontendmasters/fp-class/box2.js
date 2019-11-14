const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    toString: `Box(${x})`
});

const first = xs => xs[0];

const halfTheFirstLargeNumber_ = xs => {
    const found = xs.filter(x => x >= 20);
    const answer = first(found) / 2;
    return `The answer is ${answer}`;
}

const halfTheFirstLargeNumber = xs => 
    Box(xs)
    .map(xs => xs.filter(x => x >= 20))
    .map(found => first(found) / 2)
    .fold(answer => `The answer is ${answer}`);

// const result = () => ['a'].map(x => x.toUpperCase()).map(x => String.fromCharCode(x));
const result1 = halfTheFirstLargeNumber_([1,4,50]);
console.log(result1);
const result = halfTheFirstLargeNumber([1,4,50]);

console.log(result);