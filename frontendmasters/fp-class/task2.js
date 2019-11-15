import {Task} from './Task';
const fs = require('fs');

const readFile = (path, env) => Task((rej, res) => 
    fs.readFile(path, enc, (err, contents) => err ? rej(err) : res(contents))
);

const writeFile = (path, newContents) => Task((rej, res) => 
    fs.writeFile(path, newContents, (err, contents) => err ? rej(err) : res())
);

const app = () =>
    readFile('config.json', 'utf-8')
        .map(contents => contents.replace(/3/g, '6'))
        .chain(newContents => writeFile('config1.json'));

app.fork(console.error, () => console.log('success'));