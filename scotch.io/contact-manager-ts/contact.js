#!/usr/bin/env node 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills");
var commander = require("commander");
var inquirer = require("inquirer");
var chalk_1 = require("chalk");
var actions = require("./logic");
var questions_1 = require("./questions");
/** contact.ts **/
commander
    .version('1.0.0')
    .description('Contact Management System');
commander
    .command('addContact')
    .alias('a')
    .description('Add a contact')
    .action(function () {
    console.log(chalk_1.default.yellow('=========*** Contact Management System ***=========='));
    inquirer.prompt(questions_1.questions).then(function (answers) { return actions.addContact(answers); });
});
