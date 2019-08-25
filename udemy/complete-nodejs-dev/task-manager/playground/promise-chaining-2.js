require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5d6209816ac34353bb8484cf")
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(result => console.log(result))
  .catch(err => console.error(err));
