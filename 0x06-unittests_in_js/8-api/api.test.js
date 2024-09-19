const app = require("./api");
const request = require("supertest");

describe("Integration Test for API", () => {
  it("Should return 200 OK with correct message", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Welcome to the payment system", done);
  });
});
