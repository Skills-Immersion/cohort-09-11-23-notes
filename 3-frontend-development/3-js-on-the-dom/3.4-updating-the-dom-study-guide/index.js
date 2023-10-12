/* 
1. addHeadingsAndImages-> make all <article>Puppy 1</article> look like 
        <article>
            <h3>Puppy 1</h3>
            <img src = "linkgoeshere">
        </article>

2. styleKittensandPuppies-> style all cats and dogs by adding the classlist "kitten" or "puppy" to the article containing either a kitten or a puppy
    eg: 
    <article>
        <h3>Puppy</h3>
    </article> 
    
    will look like 
    <article class="puppy">
        <h3>Puppy 1</h3>
    </article>
    <article class="kitten">
        <h3>Kitten 1</h3>
    </article>

    3. separateCatsFromDogs
    -create a "kittens" section with the class of "kittens" to put kitten articles into
    -if the article has a kitten, remove it from that section and add it to a new section for kittens
*/


let images = [
    "https://media.tenor.com/BlHLysXBit4AAAAC/puppy-love-hi.gif",
    "https://media.tenor.com/PTBNHIGHS-kAAAAd/dog-smile.gif",
    "https://media.tenor.com/bK1qpWGyQKkAAAAM/kitty.gif",
    "https://media.tenor.com/avkEJ6QsXLcAAAAM/puppy.gif",
    "https://media.tenor.com/XybizgnL1zQAAAAM/kittens-cute.gif",
    "https://media.tenor.com/gZHJZ3gNDYwAAAAM/cute-cat.gif",
    "https://media.tenor.com/JMv_beVhW98AAAAM/perrete.gif",
    "https://media.tenor.com/g9bkJfFtovMAAAAM/dog.gif",
    "https://media.tenor.com/kKvpaWwGoPcAAAAM/stretch-kitty.gif",
    "https://media.tenor.com/WT7snNMnZoMAAAAM/luv-you-cute-kitten.gif"
];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~solutions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


function addHeadingsAndImages(){
   //access all article elements
   const allArticles = document.querySelectorAll("article");
   //for each articleElement in allArticles do:
   allArticles.forEach((articleElement, idx)=>{
       //create an h3
       const h3 = document.createElement("h3")
       //creat an img
       const img = document.createElement("img")
       //give the h3 innerText that is equal to current articleElement's innerText
       h3.innerText = articleElement.innerText;
       //give the img src the corresponding value from the images array
       img.src = images[idx]
       //clear out the article element's innerText
       articleElement.innerText = "";
       //have the articleElement append the h3 and img once they've been modified
       articleElement.appendChild(h3);
       articleElement.appendChild(img);
   })
}

addHeadingsAndImages();


function styleKittensandPuppies(){
    //access all article elements
    const allArticles = document.querySelectorAll("article");
    //for each articleElement do:
    for(let articleElement of allArticles){
        const h3 = articleElement.querySelector("h3");
        // console.log(h3.innerText)
        //check if articleElement's innerText includes the word "Puppy". If so, give the articleElement a class of "puppy". Otherwise, add the "kitten" class to articleElement
        if(h3.innerText.toLowerCase().includes("puppy")){
            articleElement.classList.add("puppy");
        }else{
            articleElement.classList.add("kitten");
        }
    }
}

styleKittensandPuppies();



function separateCatsFromDogs(){
    //create a "kittens" section with the class of "kittens" to put kitten articles into
    const kittensSection = document.createElement("section");
    //give the kittensSection a class of "kittens"
    kittensSection.classList.add("kittens");
    //identify/select the parent container for the new kittensSection
    const parentDiv = document.querySelector("div.row");
    //append the kittens section onto its parent
    parentDiv.appendChild(kittensSection)

    //select all the kitten article elements by the class name
    const allKittens = document.querySelectorAll(".kitten")
    
    allKittens.forEach((kittenArticle)=>{
        kittensSection.appendChild(kittenArticle);
    })
    
    // kittensSection.append(...allKittens)
}

separateCatsFromDogs()