// var -> don't use it anymore

// declare variables using 'let' and 'const'

// const is only for variables you don't want to be able to reassign
const numDaysInWeek = 7;

// numDaysInWeek = numDaysInWeek + 2;
// numDaysInWeek += 2;



let bitcoinPrice = 29000
bitcoinPrice += 100

// using const with arrays (push, pop, update at an index)
const top5Movies = ["Matrix", "Hero", "Step Brothers", "Pulp Fiction", "Caddy Shack"]; //Elements are the data in the array
//                    0         1           2                3             4        
// top5Movies = ["Forrest Gump"]
top5Movies[3] = "Pulp Facts";
top5Movies.push("Forrest Gump");
top5Movies.pop();
top5Movies.pop();

// console.log(top5Movies)

// using const with objects ()
const goat = {
  firstName: "Lebron",
  lastName: "James",
  age: 39,
  teams: ["Cleveland", "Miami", "Los Angeles"],
  isGoat: true
}

goat.firstName = "Bron Bron";
goat["age"] += 1;
goat.currentTeam = "Los Angeles"

// goat = {} //cant do this
// console.log(goat)

// Using let in for loops
for(let i = 10; i>=1; i--){
  console.log(i)
}
/* 
MAIN TAKEAWAYS:

1. Use const primarily; this will be your go-to. Moving forward, you'll want to declare most of your variables using const.

2. Use let if you need to reassign a value. This is a common requirement during for loops and sometimes with if statements.

3. Don't use var unless necessary, like when working in a codebase that uses it. However, that will likely only happen in the distant future. As mentioned above, there are other reasons to use (and to not use) var, but those will be covered in a different lesson. For now, just avoid it.

*/



