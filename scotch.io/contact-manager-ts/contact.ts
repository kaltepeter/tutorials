#!/usr/bin/env node 
/*** contact.ts ***/
import './polyfills'
import * as commander from 'commander'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
import * as actions from './logic';
import { getIdQuestions, questions, updateContactQuestions } from './questions'

/** contact.ts **/
commander
    .version('1.0.0')
    .description('Contact Management System')

commander
    .command('addContact')
    .alias('a')
    .description('Add a contact')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        inquirer.prompt(questions).then((answers) => actions.addContact(answers))
    })