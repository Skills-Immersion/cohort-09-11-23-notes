const {getLowRatedArtists, getAverageRating} = require("../src/main")
const expect = require("chai").expect;


const artists = [
  { name: "Taylor Swift", rating: 9 },
  { name: "Drake", rating: 9.8 },
  { name: "J Cole", rating: 8 },
  { name: "Rob", rating: 6.25 },
  { name: "Kendrick Lamar", rating: 8.5 },
  { name: "Beatles", rating: 10},
  {
      name: "Random guy from beach who asked people to follow his sound cloud",
      rating: 7,
  },
];

describe("getAverageRating()", ()=>{
  //Happy path - it should return the average rating of all the artists
  it("Happy path - it should return the average rating of all the artists", ()=>{
    //we will call the function and store its output in a variable
    const actualOutput = getAverageRating(artists)
    //we will compare the output to the expected output
    const expected = 8.36;

    //assert that the actual needs to equal to the expected
    expect(actualOutput).to.equal(expected)
  })

  //Edge case - if some rating properties are missing, it should default those missing ratings to 0 and still output a number
  it("Edge case - if some rating properties are missing, it should default those missing ratings to 0 and still output a number", ()=>{
    const incompleteArtists = [
      { name: "Taylor Swift", rating: 10 },
      { name: "Drake", rating: 8 },
      { name: "Beatles" },
    ];
    const actual = getAverageRating(incompleteArtists);
    const expected = 6.00;

    expect(actual).to.equal(expected);
  })
  //edge case - if there are no artists provided, it should return null
  it("edge case - if there are no artists provided, it should return null", ()=>{
    const actual = getAverageRating()
    const expected = null;

    expect(actual).to.equal(expected)
  })
})