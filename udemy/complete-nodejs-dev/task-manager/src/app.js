const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

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

module.exports = app;
