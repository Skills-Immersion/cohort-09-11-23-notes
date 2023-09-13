let topArtists = [
  {name: "Drake", rating: 10},
  {name: "Taylor Swift", rating: 10},
  {name: "J Cole", rating: 8},
  {name: "Kendrick Lamar", rating: 9},
  {name: "Beatles", rating: 10}
]



function getRandomArtist(artists) {
  let randomNum = Math.floor(Math.random()*artists.length)
  let randomArtist = artists[randomNum];
  return randomArtist
}

console.log(getRandomArtist(topArtists))
