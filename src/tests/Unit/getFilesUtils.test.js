import {
  filterFileByQuery,
  filterFileResponses,
  formatRecords,
} from "../../utils/getFilesUtils.js";
import { filesData, formattedFiles, promisesMock } from "./mocks.js";
import chai from "chai";
import chaiThings from "chai-things";

chai.should();
chai.use(chaiThings);

describe("Toolbox API Unit", () => {
  it("should return an object with objects response", async () => {
    const response = await Promise.all(filterFileResponses(promisesMock));

    response[0].should.to.eql([]);
    response[1].should.contain.a.thing.with.property("file");
    response[1].should.contain.a.thing.with.property("text");
    response[1].should.contain.a.thing.with.property("number");
    response[1].should.contain.a.thing.with.property("hex");
  });

  it("should return an object with the records formatted", () => {
    const response = formatRecords(filesData);

    response.should.all.have.property("file");
    response.should.all.have.property("lines");

    const lines = response.map((file) => file.lines).flat(1);
    lines.should.all.have.property("file");
    lines.should.all.have.property("text");
    lines.should.all.have.property("number");
    lines.should.all.have.property("hex");
  });

  it("should return an object with the array filtered by filename", () => {
    const response = filterFileByQuery(formattedFiles, "test9.csv");

    response.should.all.have.property("file", "test9.csv");
  });
});
