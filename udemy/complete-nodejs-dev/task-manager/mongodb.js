const {MongoClient, ObjectID} = require('mongodb');

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
        db.collection('users').findOne({_id: new ObjectID('5d1988feb14bc65bae982343')}, (error, user) => {
            if (error) {
                return console.error('Unable to fetch.');
            }
            console.log(user);
        });

        db.collection('users').find({age: 27}).count((error, users) => {
            if (error) {
                return console.error('Unable to fetch.');
            }
            console.log(users);
        });

        db.collection('tasks').findOne({_id: new ObjectID('5d198b58101e6568b3bdde16')}, (error, task) => {
            if (error) {
                return console.error('Unable to fetch task.');
            }
            console.log(task);
        });
        db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
            if (error) {
                return console.error('Unable to fetch.');
            }
            console.log(tasks);
        });
    });