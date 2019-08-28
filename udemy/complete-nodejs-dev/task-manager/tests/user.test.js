const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
  name: "test user",
  email: "testuser@example.com",
  password: "56wat!!"
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Andrew",
      email: "andrew@example.com",
      password: "MyPass777!"
    })
    .expect(201);
});

test("should login existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);
});

test("should not login non-existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "myfailingpw34!"
    })
    .expect(400);
});
