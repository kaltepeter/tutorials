const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const Task = mongoose.model("Task", {
  description: {
    type: "String",
    required: true,
    trim: true
  },
  completed: {
    type: "Boolean",
    required: false,
    default: false
  }
});

new Task({ description: "Pack a lunch" })
  .save()
  .then(result => console.log(result))
  .catch(error => console.error(error));
