const request = require('supertest');
const app = require('../src/app');
const games = require('../src/data/games');

// we want our testing code to work on standalone testing data, NOT the data that's already in the app
// SO, we need to clear out the games array in between each of our tests so that it's empty for each new test
beforeEach(() => {
  games.splice(0, games.length);
})

describe('root route', () => {
  test('sends back a nice message', async () => {
    // 1. set up the data (for the root route, we don't have to do anything)
    // 2. call the code (make the fake request with supertest)
    const response = await request(app).get('/');
    // 3. assert/expect that the code did what I wanted
    expect(response.statusCode).toBe(200);
    // NOTE that the root route is WEIRD, for all of our JSON routes, we'll expect data in response.body, NOT response.text
    expect(response.text).toEqual('welcome to the games app. we like games.');
  })
})

describe('read route', () => {
  // the basic case: a single game in the array, request that single game
  // the standard case: many games in the array, request one of them
  test('responds with a single game that exists in the array', async () => {
    let underlyingGamesData = [
      {
        "id": 45,
        "name": "sorry",
        "medium": "board",
        "minPlayerCount": 2,
        "maxPlayerCount": 4
      },
      {
        "id": 12,
        "name": "catan",
        "medium": "board",
        "minPlayerCount": 2,
        "maxPlayerCount": 4
      },
      {
        "id": 7,
        "name": "Clue",
        "medium": "board",
        "minPlayerCount": 2,
        "maxPlayerCount": 6
      }
    ];
    // put that data into the games array (conveniently, also the array used by app.js)
    games.push(...underlyingGamesData);
    // call the code!
    const response = await request(app).get('/games/7')
    // assert that the response looks as expected
    expect(response.statusCode).toBe(200)
    expect(response.body.data).toEqual(underlyingGamesData[2])
  })
  // the error case: games in the array, but the id we request is not the id of one of those games
  // the error case, special edition: no games in array, make request
  test('returns a 404 when there are no games in the array', async () => {
    // no data to set up, lol
    const response = await request(app).get('/games/12');
    expect(response.statusCode).toBe(404)
    expect(response.body.error).toEqual(expect.stringContaining('12'))
  })
})