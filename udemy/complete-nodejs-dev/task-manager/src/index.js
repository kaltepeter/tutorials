const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// maintenence message
// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Check back soon!");
// });

app.use((req, res, next) => {
  console.log(`${req.method}:  ${req.path}`);
  next();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//
// Without middleware:  new request -> run route handler
//
// With middleware:     new request -> do something -> run route handler
//

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("5d636245046b18ed265a38cc");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);
  const user = await User.findById("5d635b0375e8f7dae49f3ba4");
  await user.populate("tasks").execPopulate();

  console.log(user.tasks);
};

main();
