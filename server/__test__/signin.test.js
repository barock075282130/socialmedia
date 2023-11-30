// const app = require("../route/signin").post;
// const request = require("supertest");

// describe("POST /signin", () => {
//   test("it should get email and password", async(done) => {
//     const res = await request(app)
//       .post("/signin")
//       .send({ email: "test@test.com", password: "passtest" })

//       expect(res.statusCode).toBe(200)
//       expect(res.body.token).toBeDefined();
//   });

//   test("should return 401 for invalid email", async () => {
//     const res =  request(app)
//       .post("/signin")
//       .send({ email: "invalid", password: "passtest" })
//       expect(res.statusCode).toBe(401)
//   });

//   test("should return 401 for invalid password", async () => {
//     const res = await request(app)
//       .post("/signin")
//       .send({ email: "test@test.com", password: "invalid" });
//       expect(res.statusCode).toBe(401);
//   });
// });
