const request = require("supertest");
const app = require("../src/app");
const Task = require("../src/models/task");
const {
  userTwo,
  userOne,
  taskOne,
  taskTwo,
  setupDatabase
} = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should create a task for user", async () => {
  const response = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: "From my test"
    })
    .expect(201);

  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test("Should not create a task with invalid description", async () => {
  await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: ""
    })
    .expect(400);
});

test("Should not create a task with invalid completed", async () => {
  await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      completed: ""
    })
    .expect(400);
});

test("should get all tasks for userOne", async () => {
  const response = await request(app)
    .get("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toBe(2);
});

test("should sortBy createdAt DESC all tasks for userOne", async () => {
  const response = await request(app)
    .get("/tasks?sortBy=createdAt:desc")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toBe(2);
  expect(response.body[0]._id).toBe(taskTwo._id.toHexString());
  expect(response.body[1]._id).toBe(taskOne._id.toHexString());
});

test("should page tasks for userOne", async () => {
  const response = await request(app)
    .get("/tasks?limit=1")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toBe(1);
  expect(response.body[0]._id).toBe(taskOne._id.toHexString());
});

test("should get all completed tasks for userOne", async () => {
  const response = await request(app)
    .get("/tasks?completed=true")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toBe(1);
});

test("should get all impcomplete tasks for userOne", async () => {
  const response = await request(app)
    .get("/tasks?completed=false")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toBe(1);
});

test("should get task by id", async () => {
  const response = await request(app)
    .get(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body._id).toEqual(taskOne._id.toHexString());
  expect(response.body.description).toEqual(taskOne.description);
});

test("should not get task by id for other users", async () => {
  await request(app)
    .get(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404);
});

test("should not get task by id if unauthenticated", async () => {
  await request(app)
    .get(`/tasks/${taskOne._id}`)
    .send()
    .expect(401);
});

test("should delete user task", async () => {
  const response = await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body._id).toBe(taskOne._id.toHexString());
});

test("should not delete other users tasks", async () => {
  await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404);

  const task = await Task.findById(taskOne._id);
  expect(task).not.toBeNull();
});

test("should not delete if unauthenticated", async () => {
  await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .send()
    .expect(401);
});

test("should not update a task with invalid description", async () => {
  await request(app)
    .patch(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: ""
    })
    .expect(400);
});

test("should not update a task with invalid completed", async () => {
  await request(app)
    .patch(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      completed: ""
    })
    .expect(400);
});

test("should not other users task", async () => {
  await request(app)
    .patch(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userTwo.tokens[0].token}`)
    .send({
      completed: true
    })
    .expect(404);
});
