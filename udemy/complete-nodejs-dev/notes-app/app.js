const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// customize version
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => { console.log('adding a new note') }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('removing the note');
    }
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: () => {
        console.log('Listing out all notes.');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read note', 
    handler: () => {
        console.log('Reading a note.');
    }
});

console.log(yargs.argv);