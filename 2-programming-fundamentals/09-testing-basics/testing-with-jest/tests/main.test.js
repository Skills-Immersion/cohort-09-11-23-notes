const {getLowRatedArtists, getAverageRating, getRatingOfLowestRatedArtist} = require("../src/main")
// const expect = require("chai").expect;


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
    // expect(actualOutput).to.equal(expected)
    expect(actualOutput).toBe(expected);
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

    expect(actual).toBe(expected);
  })
  //edge case - if there are no artists provided, it should return null
  it("edge case - if there are no artists provided, it should return null", ()=>{
    const actual = getAverageRating()
    const expected = null;

    expect(actual).toBe(expected)
  })
})

describe("getRatingOfLowestRatedArtist()", ()=>{
  //it gives back the correct rating as a number for the lowest rated artist
  it("it gives back the correct rating as a number for the lowest rated artist", ()=>{
    //1. collect the actual output from the function by calling the function
    const actual = getRatingOfLowestRatedArtist(artists);
    //2. have an expected value that we expect the function to output
    const expected = 6.25;
    //3. use chai to assert that the actual is equal to the expected
    expect(actual).toBe(expected);
  })
  //edge case - gives back null if no artists are provided
  it("edge case - gives back null if no artists are provided", ()=>{
    //1. collect the actual output from the function by calling the function
    const actual = getRatingOfLowestRatedArtist();
    //2. have an expected value that we expect the function to output
    const expected = null;
    //3. use chai to assert that the actual is equal to the expected
    expect(actual).toBe(expected);
  })
})

describe("getLowRatedArtists()", ()=>{
  //it returns an array of the correct artists who have a rating below the given rating
  it("it returns an array of the correct artists who have a rating below the given rating", ()=>{
    //1. collect the actual output from the function by calling the function
    const actual = getLowRatedArtists(artists, 8);
    //2. have an expected value that we expect the function to output
    const expected = [
      { name: "Rob", rating: 6.25 },
      {
        name: "Random guy from beach who asked people to follow his sound cloud",
        rating: 7,
      }
    ]
    //3. use chai to assert that the actual is equal to the expected
    expect(actual).toEqual(expected);
  })

  //it should give back an array if artists and a rating are provided
  it("it should give back an array if artists and a rating are provided", ()=>{
     //1. collect the actual output from the function by calling the function
     const actual = getLowRatedArtists(artists, 8);
     //2. have an expected value that we expect the function to output
    
     //3. use chai to assert that the actual is equal to the expected
    //  expect(actual).to.be.an("array");
    expect(actual).toBeInstanceOf(Array);
    expect(Array.isArray(actual)).toBe(true);
  })
  //it should give back null if artists are empty or rating is not provided
  it("it should give back null if artists are empty or rating is not provided", ()=>{
    //1. collect the actual output from the function by calling the function
    const actual = getLowRatedArtists();
    //2. have an expected value that we expect the function to output
   
    //3. use chai to assert that the actual is equal to the expected
    // expect(actual).to.equal(null);
    expect(actual).toBeNull();
 })
})