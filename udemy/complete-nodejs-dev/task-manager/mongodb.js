const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, 
    {
    useNewUrlParser: true
    }, 
    (error, client) => {
        if (error) {
            return console.error('Unable to connect to the database!');
        }

        const db = client.db(databaseName);
        // db.collection('users').insertOne({
        //     name: 'Kayla',
        //     age: 34
        // }, (error, result) => {
        //     if (error) {
        //         return console.error('Unable to insert user');
        //     }

        //     console.log(result.ops);
        // });
        // db.collection('users').insertMany([
        //     {
        //         name: 'Jon',
        //         age: 28
        //     },
        //     {
        //         name: 'Gunther',
        //         age: 27
        //     }
        // ], (error, result) => {
        //     if (error) {
        //         return console.error('Unable to insert user');
        //     }
        //     console.log(result.ops);
        // });

        db.collection('tasks').insertMany([
            {
                description: 'Make lunch',
                completed: false
            },
            {
                description: 'Pack bags',
                completed: false
            },
            {
                description: 'Make coffee',
                completed: false
            },
        ], (error, result) => {
            if (error) {
                return console.error('Unable to insert user');
            }
            console.log(result.ops);
        });
    });