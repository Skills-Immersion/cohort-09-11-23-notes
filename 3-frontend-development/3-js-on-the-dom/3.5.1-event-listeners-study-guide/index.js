/* ~~~~~~~~~~~~~~~~~~~~~~~~ 20.5 Event Listeners ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function expandArticleBody() {
    //select all the stats buttons
    const allStatsBtns = document.querySelectorAll(".expand_button");
    allStatsBtns.forEach((statsBtn)=>{
        statsBtn.addEventListener("click", (event)=>{
            //if the buttons innerText says "View Stats", then we will set the style of the stats div associated with that button to ahve display property to "block". Otherwise, we will set the stats div's display property to "hidden"
            // const associatedSection = event.target.parentNode.parentNode.parentNode
            // const statsDiv = associatedSection.querySelector(".stats")

            const associatedSection = event.target.closest("section")
            const statsDiv = associatedSection.querySelector(".stats")

            if(event.target.innerText === "View Stats"){
                statsDiv.style.display= "block";
                event.target.innerText = "Hide Stats";
            }else{
                statsDiv.style.display= "none";
                event.target.innerText = "View Stats";
            }
        })
    })
}

function crossOffArticle() {
    const allToggleVisitedBtns = document.querySelectorAll(".toggle-visited")
    allToggleVisitedBtns.forEach((btn)=>{
        btn.addEventListener("click", (event)=>{
            console.log("crossing off article function running")

            const associatedSection = event.target.closest("section.park-display")
            if(event.target.innerText === "Mark Visited"){
                associatedSection.style.textDecoration = "line-through";
                event.target.innerText = "Unmark"
            }else{
                associatedSection.style.textDecoration = "none"
                event.target.innerText = "Mark Visited"
            }
        })
    })
}


  
function main() {
    expandArticleBody();
    crossOffArticle();
}

window.addEventListener("DOMContentLoaded", ()=>{
    main()
})
  