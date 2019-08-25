const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: "String",
    required: true,
    trim: true
  },
  email: {
    type: "String",
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  age: {
    type: "Number",
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  }
});

const me = new User({ name: "     Andrew   ", email: "MYEMAIL@MEAD.IO" });

me.save()
  .then(result => console.log(result))
  .catch(error => console.error("Error! ", error));

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
