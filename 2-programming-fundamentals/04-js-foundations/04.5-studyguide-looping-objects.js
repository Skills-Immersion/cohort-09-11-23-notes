const tournament1 = {
  "game 1": { homeTeam: 100, awayTeam: 85 },
  "game 2": { homeTeam: 98, awayTeam: 100 },
  "game 3": { homeTeam: 50, awayTeam: 51 },
  "game 4": { homeTeam: 10, awayTeam: 8 },
};
const tournament2 = {
  "game 1": { homeTeam: 100, awayTeam: 85 },
  "game 2": { homeTeam: 98, awayTeam: 100 },
};

// Input
// Your input for both functions will be a tournament object

// calculateTotalPoints
//The calculateTotalPoints function will take in the tournament and return a total number of points scored from all teams in all games
function calculateTotalPoints(tournament){
  let total = 0;
  for(let gameNumKey in tournament){
    //how would i get the nested objects?
    const gameData = tournament[gameNumKey]
    total += gameData.homeTeam + gameData.awayTeam
  }
  return total
}

// console.log(calculateTotalPoints(tournament1))
// console.log(calculateTotalPoints(tournament2))






// printGameSummarys
// The printGameSummarys function will take in the tournament of game objects and return a string, joined by \n, of the game results for each game

// For example:

//printGameSummarys(tournament1); //> "Game 1: Home team beat the away team 100-85 \n Game 2: Home team lost to the away team 98-100 \n etc;"

function printGameSummarys(tourney){
  let result = ""
  for(let key in tourney){
    // console.log("key is", key)
    const homeTeamScore = tourney[key].homeTeam;
    const awayTeamScore = tourney[key].awayTeam;
    //this is another way
    // const homeTeamScore = tourney[key]['homeTeam'];
    // const awayTeamScore = tourney[key]['awayTeam'];
    
    let gameResult;
    if(homeTeamScore > awayTeamScore){
      gameResult = "beat"
    }else{
      gameResult = "lost"
    }

    // console.log(`${key}: Home team ${homeTeamScore > awayTeamScore ? "beat" : "lost"} the away team ${homeTeamScore}-${awayTeamScore}`)
    // console.log(`${key}: Home team ${gameResult} the away team ${homeTeamScore}-${awayTeamScore}`)
    result += `${key}: Home team ${gameResult} the away team ${homeTeamScore}-${awayTeamScore}\n`

  }

  return result
}

console.log(printGameSummarys(tournament1))