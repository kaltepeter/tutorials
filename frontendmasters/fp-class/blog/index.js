const {save,all} = require('../lib/db');
const {Task} = require('../lib/types');
const {last} = require('ramda');

const AuthorTable = "Authors";
const Author = name => ({name});

const AuthorTable = "Post";
const Author = (title, body) => ({title, body});

const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout});
const getInput = (q) => Task((rej,res) => readline.question(q, i => res(i.trim())));

const router = {menu, createAuthor, write, latest};

const menu = () => getInput("Where do you want to go today? (createAuthor, write, latest, all)")
    .map(route => router[route]);

const formatPost = post => `${post.title}:\n${post.body}`;
const print = s => Task((rej, res) => res(console.log(s)));

const createAuthor = () => getInput("Name? ")
    .map(name => Author(name))
    .chain(author => save(AuthorTable, author))
    .map(() => menu);

const latest = () => all(PostTable)
    .map(posts => last(posts))
    .map(formatPost)
    .chain(print)
    .map(() => menu);

const write = () => getInput("Title: ")
    .chain(title => getInput("Body: ")
        .map(body => Post(title, body))
    )
    .chain(post => save(PostTable, post))
    .map(() => latest);

const start = () => all(AuthorTable)
    .map(authors => authors.length ? menu : createAuthor);

const runApp = (f) => f().fork(console.error, runApp);

runApp(start);