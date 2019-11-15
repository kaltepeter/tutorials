const fs = require('fs');
const { task, Either, Id } = require('folktale/concurrency/task');
// const {Either, Id} = require('types');
const {Right, Left, fromNullable} = Either;
const {List, Map} = require('immutable-ext');

const httpGet = (path, params) => Id.of(`${path}: result`);

Either.of(2).map(two => two * 2).toJs();
List.of(2).map(two => two * 2).toJs();

const getUser = x => httpGet('/user', {id: x});
const getTimeline = x => httpGet('/timeline/${x}', {});
const getAds = () => httpGet('/ads', {});

List([getUser, getTimeline, getAds])
    .traverse(task.of, f => f())
    .fork(console.log, x => console.log(x.toJS()));

const greaterThan5 = x => x.length > 5 ? Right(x) : Left('not greater than 5');

const looksLikeEmail = x  => x.match(/@/ig) ? Right(x) : Left('not an email');

const email = 'blahh@yadda.com'
const res = List([greaterThan5, looksLikeEmail]).traverse(Either.of, v => v(email));

res.fold(console.log, x => console.log(x.toJS()));

const eitherToTask = e => e.fold(Task.rejected, Task.of);