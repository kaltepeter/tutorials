const {List} = require('immutable-ext');
const {Either} = require('./types');
const {Left, Right} = Either;
// const isPresent = x => !!x;
const Validation = run => ({
    run,
    concat: other => Validation((key, x) => run(key,x).concat(other.run(key, x)))
})
const isPresent = Validation((key,x) => !!x ? Success(x) : Fail([`${key} needs to be preset`]));
const isEmail = Validation((key, x) => /@/.test(x) ? Success(x) : Fail([`${key} must be an email`]));

const Success = x => ({
    isFail: false,
    x,
    fold: (f,g) => g(x),
    concat: other => other.x.isFail ? other : Success(x)
});

const Fail = x => ({
    isFail: true,
    x,
    fold: (f,g) => f(x),
    concat: other => other.isFail ? Fail(x.concat(other.x)) : Fail(x)
});

// const validations = {
//     name: isPresent, 
//     email: isEmail.concat(isPresent)
// }

const validations = {
    name: isPresent, 
    email: isPresent
}

const validate = (spec, obj) => List(Object.keys(spec))
.foldMap(
    key => {
    spec[key].run(key, obj[key], Success([obj])
});

const obj = {name: 'brian', email: ''}
const res = validate(validations, obj) // obj || errors
console.log('V', res.fold(console.error, console.log));
// isPresent(obj.name).concat(isEmail(obj.email));
