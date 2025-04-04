const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const { userOneId, userOne, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("should signup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Andrew",
      email: "andrew@example.com",
      password: "MyPass777!"
    })
    .expect(201);

  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  expect(response.body).toMatchObject({
    user: {
      name: "Andrew",
      email: "andrew@example.com"
    },
    token: user.tokens[0].token
  });

  expect(user.password).not.toBe("MyPass777!");
});

test("should not signup a new user with invalid name", async () => {
  await request(app)
    .post("/users")
    .send({
      email: "andrew@example.com",
      password: "MyPass777!"
    })
    .expect(400);
});

test("should not signup a new user with invalid email", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Andrew",
      email: "andrew@",
      password: "MyPass777!"
    })
    .expect(400);
});

test("should not signup a new user with invalid password", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Andrew",
      email: "andrew@example.com",
      password: "MyPa7!"
    })
    .expect(400);
});

test("should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);

  const user = await User.findById(response.body.user._id);

  expect(user).not.toBeNull();

  expect(response.body.token).toBe(user.tokens[1].token);
});

test("should not login non-existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "myfailingpw34!"
    })
    .expect(400);

  expect(response.body.token).toBe(undefined);
});

test("should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("should not get profile for unauthenticated user", async () => {
  await request(app)
    .get("/users/me")
    .send()
    .expect(401);
});

test("should delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(userOne._id);
  expect(user).toBeNull();
});

test("should not delete user if unauthenticated", async () => {
  await request(app)
    .delete("/users/me")
    .send({
      name: "Andrew2"
    })
    .expect(401);
});

test("should not delete account for unauthenticated user", async () => {
  await request(app)
    .delete("/users/me")
    .send()
    .expect(401);
});

test("should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/profile-pic.jpg")
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("should update valid user fields", async () => {
  const response = await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: "Andrew2"
    })
    .expect(200);

  expect(response.body.name).toBe("Andrew2");
});

test("should not update user if unauthenticated", async () => {
  await request(app)
    .patch("/users/me")
    .send({
      name: "Andrew2"
    })
    .expect(401);
});

test("should not update a user with invalid name", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: ""
    })
    .expect(400);
});

test("should not update a user with invalid email", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      email: "test@"
    })
    .expect(400);
});

test("should not update a user with invalid password", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      password: "123"
    })
    .expect(400);
});

test("should not update invalid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      location: "Pittsberg"
    })
    .expect(400);
});
