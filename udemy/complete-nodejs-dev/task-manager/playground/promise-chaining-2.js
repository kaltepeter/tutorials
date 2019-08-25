require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5d6209816ac34353bb8484cf")
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => console.log(result))
//   .catch(err => console.error(err));

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5d629a3a5b49ef694382d99a")
  .then(count => console.log(count))
  .catch(err => console.error(err));
