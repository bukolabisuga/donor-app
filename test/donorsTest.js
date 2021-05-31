process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require('../server');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('Donors', () => {
  const testDonor = {
    firstName: "Bukola",
    lastName: "Bisuga",
    address: "Odelola street, Surulere",
    city: "Lagos",
    country: "Nigeria",
    postalCode: "100283",
    phone: "08161286594",
    email: "bukola@gmail.com",
    preferredFormOfContact: "phone",
    preferredFormOfPayment: "ngn",
    frequency: "weekly",
    amount: "60",
    comments: "n/a"
  };

  const badDonor = {
    firstName: "John",
    lastName: "Doe",
    address: "3 Dames lane",
    email: "johnny@gmail.com",
    preferredFormOfContact: "phone",
    preferredFormOfPayment: "usd",
    frequency: "monthly",
    amount: "60",
    comments: "n/a",
  };

  describe("Create a donor", () => {
    it("The donor should not be created if required fields are missing", done => {
      chai.request(server)
        .post("/api/donors/save")
        .send(testDonor)
        .end((err, res) => {
          const { message, data } = res.body;
          res.should.have.status(201);
          data.should.be.a("object");
          message.should.be.a("string");
          data.should.have.property("firstName");
          data.should.have.property("lastName");
          data.should.have.property("address");
          data.should.have.property("city");
          data.should.have.property("country");
          data.should.have.property("postalCode");
          data.should.have.property("phone");
          data.should.have.property("email");
          data.should.have.property("preferredFormOfContact");
          data.should.have.property("preferredFormOfPayment");
          data.should.have.property("frequency");
          data.should.have.property("amount");
          done();
        });
    });

    it("A new donor and an object containing a success message and the newly created donor is returned", done => {
      chai.request(server)
        .post("/api/donors/save")
        .send(badDonor)
        .end((err, res) => {
          const { code, message } = res.body;
          res.should.have.status(400);
          expect(code).to.be.equal("INVALID_INPUT");
          message.should.be.a("string");
          done();
        });
    });
  });
});
