import  numifyStyles, {removeSuffix} from "../utilities/numifyStyles";

describe("removeSuffix", function () {
  it("removes px suffix", function () {
    chai.assert.equal(removeSuffix("500px"), "500");
  });
});

describe("numifyStyles", function () {
  it("numifies px", function () {
    chai.assert.equal(numifyStyles("500px"), 500);
  });
});
