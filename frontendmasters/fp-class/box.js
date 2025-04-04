const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    toString: `Box(${x})`
});

const nextCharForNumberString_ = str => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = new Number(number + 1);
    return String.fromCharCode(nextNumber);
}

const nextCharForNumberString = str => 
    Box(str)
    .map(x => x.trim())
    .map(trimmed => parseInt(trimmed, 10))
    .map(number => new Number(number + 1))
    .fold(String.fromCharCode);

// const result = () => ['a'].map(x => x.toUpperCase()).map(x => String.fromCharCode(x));
const result1 = nextCharForNumberString_('  64  ');
console.log(result1);
const result = nextCharForNumberString('  64  ');

console.log(result);