const app = require("../signin").post
const supertest = require('supertest')

describe('POST /signin', () => {
    it('it should get email and password', () => {
         supertest(app)
        .post('/signin')
        .send({ email: 'test@test.com', password: 'passtest' })
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(res => {
            expect(res.body).toBeDefined();
        })
    });

    it('should return 401 for invalid email', () => {
         supertest(app)
          .post("/signin")
          .send({ email: "invalid", password: "passtest" })
          .expect(401);
    });
    
    it("should return 401 for invalid password",  () => {
       supertest(app)
        .post("/login")
        .send({ email: "test@test.com", password: "invalid" })
        .expect(401);
    });

});