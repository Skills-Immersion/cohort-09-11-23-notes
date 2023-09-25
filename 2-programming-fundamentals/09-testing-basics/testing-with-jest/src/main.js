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

//get the average rating of all the artists form the given array
function getAverageRating(artists = []) {
    if(!artists.length)return null;
    let sum = artists.reduce((acc, artistObj) => {
        const {rating=0} = artistObj
        acc += rating;
        return acc;
    }, 0);
    let average = sum / artists.length;
    return Number(average.toFixed(2))
}

// console.log(getAverageRating(artists));
// console.log(getAverageRating());



function getRatingOfLowestRatedArtist(artists=[]){
    if(!artists.length) return null;
    artists.sort((artistA, artistB)=>{
        return artistA.rating - artistB.rating;
    })
    return artists[0].rating;
}


// get all the artists who are rated lower than a given number
function getLowRatedArtists(artists = [], rating) {
    if(!artists.length || !rating)return null;
    return artists.filter((artist) => {
        return artist.rating < rating;
    });
}

function findArtistByName(artists=[]){

}


//Primitive types = string, numbers, booleans, null/undefined
//reference types = arrays, objects

// console.log(3===3);
// console.log(["a", "b"] === ["a", "b"]);


// console.log(getLowRatedArtists(artists, 7));

module.exports = { getLowRatedArtists, getAverageRating, getRatingOfLowestRatedArtist };
