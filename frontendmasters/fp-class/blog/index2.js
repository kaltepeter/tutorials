const { save, all } = require("../lib/db");
const { Task } = require("../lib/types");
const { last } = require("ramda");
const { liftF } = require("../lib/free");
const { taggedSum } = require("daggy");

const Console = taggedSum("Console", {
  Question: ["q"],
  Print: ["s"]
});

const Db = taggedSum("Db", {
  Save: ["table", "record"],
  All: ["table", "query"]
});

const AuthorTable = "Authors";
const Author = name => ({ name });

const AuthorTable = "Post";
const Author = (title, body) => ({ title, body });

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
const getInput = q =>
  Task((rej, res) => readline.question(q, i => res(i.trim())));

const router = { menu, createAuthor, write, latest };

const menu = () =>
  question(
    "Where do you want to go today? (createAuthor, write, latest, all)"
  ).map(route => router[route]);

const formatPost = post => `${post.title}:\n${post.body}`;
const writeOutput = s => Task((rej, res) => res(console.log(s)));
const question = s => liftF(Console.Question(s));
const print = s => liftF(Console.Print(s));

const dbAll = (table, query) => liftF(Db.All(table, query));
const dbSave = (table, record) => liftF(Db.Save(table, record));

const createAuthor = () =>
  question("Name? ")
    .map(name => Author(name))
    .chain(author => dbSave(AuthorTable, author))
    .map(() => menu);

const latest = () =>
  dbAll(PostTable)
    .map(posts => last(posts))
    .map(formatPost)
    .chain(print)
    .map(() => menu);

const write = () =>
  question("Title: ")
    .chain(title => question("Body: ").map(body => Post(title, body)))
    .chain(post => dbSave(PostTable, post))
    .map(() => latest);

const start = () =>
  dbAll(AuthorTable).map(authors => (authors.length ? menu : createAuthor));

const dbToTask = x =>
  x.cata({
    Save: save,
    All: all
  });

const consoleToTask = x =>
  x.cata({
    Print: writeOutput,
    Question: getInput
  });

  const dbToId = x => x.cata({
    Save: (table, r) => Id.of(`saving ${r} to ${table}`),
    All: (table, q) => Id.of(`find all ${table} ${q}`),
})

  const consoleToId = x => x.cata({
      Question: (q) => Id.of(`answer to ${q}`),
      Print: (s) => Id.of(`writing the string to ${s}`),
  })

const intrepret = x => (x.table ? dbToTask(x) : consoleToTask(x));
const intrepretTest = x => (x.table ? dbToId(x) : consoleToId(x));

const runApp = f =>
  f()
    .foldMap(intrepretTest, Task.of)
    .fork(console.error, runApp);

runApp(start);
