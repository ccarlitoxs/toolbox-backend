import request from "supertest";
import httpStatus from "http-status";
import chai from "chai";
import app from "../../index.js";
import chaiThings from "chai-things";

chai.should();
chai.use(chaiThings);

describe("Toolbox API Integration", async () => {
  describe("GET /v1/files/data", () => {
    it("should retrieve a list of formatted data from csv files when request is ok", () => {
      return request(app)
        .get("/v1/files/data")
        .expect(httpStatus.OK)
        .then((res) => {
          const body = res.body;
          body.should.all.have.property("file");
          body.should.all.have.property("lines");

          const lines = body.map((file) => file.lines).flat(1);
          lines.should.all.have.property("file");
          lines.should.all.have.property("text");
          lines.should.all.have.property("number");
          lines.should.all.have.property("hex");
        });
    });
  });
});
