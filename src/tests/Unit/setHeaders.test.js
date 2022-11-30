import { setHeaders, setHeadersWithContent } from "../../utils/setHeaders.js";
import { expect } from "chai";

describe("Testing setHeaders function", () => {
  it("should return an object headers", () => {
    const headers = setHeaders();

    expect(headers).to.eql({
      accept: "application/json",
      authorization: "Bearer aSuperSecretKey",
    });
  });

  it("should return an object headers with Content-type", () => {
    const headers = setHeadersWithContent();
    expect(headers).to.eql({
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer aSuperSecretKey",
    });
  });
});
