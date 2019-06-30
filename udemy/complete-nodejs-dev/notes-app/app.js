const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// customize version
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => { 
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
    }
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

yargs.parse();

// console.log(yargs.argv);