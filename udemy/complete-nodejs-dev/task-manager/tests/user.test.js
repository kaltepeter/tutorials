const request = require("supertest");
const app = require("../src/app");

beforeEach(() => {});

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
