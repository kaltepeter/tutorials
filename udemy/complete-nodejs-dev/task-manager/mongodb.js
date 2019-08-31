const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true
  },
  (error, client) => {
    if (error) {
      return console.error("Unable to connect to the database!");
    }

    const db = client.db(databaseName);

    db.collection("tasks")
      .deleteOne({ description: "Make coffee" })
      .then(result => console.log(result))
      .catch(error => console.error(error));

    // db.collection("users")
    //   .deleteMany({
    //     age: 27
    //   })
    //   .then(result => console.log(result))
    //   .catch(error => console.error(error));

    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     }
    //   )
    //   .then(result => console.log(result))
    //   .catch(error => console.error(error));

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5d1988feb14bc65bae982343")
    //     },
    //     {
    //       $inc: {
    //         age: 1
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
);
