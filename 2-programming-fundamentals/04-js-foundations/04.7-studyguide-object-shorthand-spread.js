
/* 
WRITE A FUNCTION NAMED UPDATEPLAYER() THAT WILL ACCEPT A TEAM NAME LIKE "CELTICS" AND A PLAYER OBJECT LIKE THIS: 
let player1 = {
    firstName: "Lebron",
    lastName: "James",
    points: 32000,
    teams: ["Cavs", "Heat"]
  }


AND IT WILL RETURN A NEW OBJECT LIKE THIS CONTAINING THE TEAM NAME ADDED TO THE LIST OF TEAMS

{
  fullName: 'Lebron James',
  points: 32000,
  teams: [ 'Cavs', 'Heat', 'Lakers' ]
}


*/
const player1 = {
  firstName: "Lebron",
  lastName: "James",
  points: 32000,
  jerseyNumber: 6,
  teams: ["Cavs", "Heat"]
}

const player2 = {
  firstName: "Chris",
  lastName: "Paul",
  points: 1800,
  jerseyNumber: 3,
  teams: ["Hornets", "Clippers", "Rockets", "Suns"]
}
const player3 = {
  firstName: "Chris",
  lastName: "Paul",
  points: 1800,
  jerseyNumber: 3,
  teams: ["Hornets", "Clippers", "Rockets", "Suns"]
}

function updatePlayer(teamName, playerObj) {
	//can't use player.points, or player.firstName or player.lastName in the answer
  const {firstName, lastName, points, teams} = playerObj;
  //add the new team to the teams array
  teams.push(teamName)

  return {
    fullName: `${firstName} ${lastName}`,
    points,
    teams
  }

}

// console.log(updatePlayer("Lakers", player1))


/* 

WRITE A FUNCTION NAMED JOINTEAMS() THAT WILL TAKE TWO DIFFERENT PLAYER OBJECTS AND WILL RETURN AN ARRAY CONTAINING THE TEAMS OF BOTH PLAYERS LIKE THIS: [ 'CAVS', 'HEAT', 'HORNETS', 'CLIPPERS', 'ROCKETS', 'SUNS' ]
*/

function joinTeams(playerA, playerB) {
  const {teams:teamsA} = playerA;
  const {teams:teamsB} = playerB;

  return [...teamsA, ...teamsB]
}





console.log(joinTeams(player1, player2))
