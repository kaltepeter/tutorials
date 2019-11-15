// const {Either} = require('../lib/types');
const {List} = require('immutable-ext');

const toUpper = x => x.toUpperCase();
const exclaim = x => x.concat('!');

const Fn = run => ({
    run,
    chain: f => Fn(x => f(run(x)).run(x)),
    map: f => Fn(x => f(run(x))),
    concat: other => Fn(x => run(x).concat(other.run(x)))
});

Fn.ask = Fn(x => x);
Fn.of = x => Fn(() => x);

const res = Fn(toUpper).concat(Fn(exclaim)).run('fp sux');
console.log(res);

const res2 = Fn(toUpper).chain(upper => Fn(y => exclaim(upper))).run('hi');
console.log(res2);

const res3 = Fn.of('hello')
    .map(toUpper)
    .chain(upper => Fn.ask.map(config => [upper, config]));
console.log(res3.run({port: 3000}));

const Endo = run => ({
    run,
    concat: other => Endo(x => other.run(run(x)))
});

Endo.empty = () => Endo(x => x);


console.log(List([toUpper, exclaim])
    .foldMap(Endo, Endo.empty())
    .run('hello'));

// (acc,a) -> acc
// (a,acc) -> acc
// a -> (acc -> acc)
// a -> Endo(acc -> acc)
// Fn(a -> Endo(acc -> acc))

const Reducer = run => ({
    run,
    contramap: f => Reducer((acc, x) => run(acc, f(x))),
    concat: other => Reducer((acc,x) => other.run(run(acc,x), x))
});

const logcheckCreds = (email, pass) => email === 'admin' && pass === '123';
const login = (state, payload) => payload.email ? Object.assign({}, state, {logginedIn: checkCreds(payload.email, payload.pass)}) : state;
const setPrefs = (state, payload) => payload.prefs ? Object.assign({}, state, payload.prefs) : state;

// const reducer = Fn(login).concat(Fn(setPrefs));
const reducer = Fn(login).map(Endo).concat(Fn(setPrefs).map(Endo));

const state = {loggedIn: false, prefs: {}}
const payload = {email: 'dmin', pass: '123', prefs: {bgColor: '#000'}};
console.log(reducer.run(payload).run(state));

Reducer(login.contramap(pay => pay.user))
    .concat(Reducer(setPrefs).contramap(pay => pay.currentPage))
    .run({user: {name: 'kayla'}, currentPage: 'dash'});