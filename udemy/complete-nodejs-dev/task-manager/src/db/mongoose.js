const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// const User = mongoose.model("User", {
//   name: {
//     type: "String"
//   },
//   age: {
//     type: "Number"
//   }
// });

// const me = new User({ name: "Kayla", age: 30 });

// me.save()
//   .then(result => console.log(result))
//   .catch(error => console.error("Error! ", error));

const Task = mongoose.model("Task", {
  description: {
    type: "String"
  },
  completed: {
    type: "Boolean"
  }
});

new Task({ description: "Pack a lunch", completed: false })
  .save()
  .then(result => console.log(result))
  .catch(error => console.error(error));
