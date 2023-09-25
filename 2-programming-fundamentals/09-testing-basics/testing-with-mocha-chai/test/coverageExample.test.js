const assignGrade = require("../src/coverageExample");
const expect = require("chai").expect;


describe("assignGrade()", ()=>{
  //it should return the correct grade letter when given a score
  it("it should return the correct grade letter when given a score", ()=>{
    const actual1 = assignGrade(0.92);
    const expected1 = "A"
    const actual2 = assignGrade(0.82);
    const expected2 = "B"
    const actual3 = assignGrade(0.72);
    const expected3 = "C"
    expect(actual1).to.equal(expected1);
    expect(actual2).to.equal(expected2);
    expect(actual3).to.equal(expected3);


  })
})