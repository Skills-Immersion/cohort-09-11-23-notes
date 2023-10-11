//SANITY CHECK!!
// console.log("hi");

//Select the h1 tag
const h1tag = document.querySelector("h1");
const cuteImgTag = document.querySelector("img")
setInterval(()=>{
  if(cuteImgTag.src === "https://media.tenor.com/dCWAkC3mnWwAAAAC/puppy-dog.gif"){
    cuteImgTag.src = "https://media.tenor.com/CkgRfJog-hoAAAAM/kitty-cat-sandwich.gif"
  }else{
    cuteImgTag.src = "https://media.tenor.com/dCWAkC3mnWwAAAAC/puppy-dog.gif"
  }
},2000)
// console.log(h1tag.innerText)