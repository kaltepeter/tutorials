const chalk = require('chalk');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.green.inverse.bold('Success!');
console.log(greenMsg);
