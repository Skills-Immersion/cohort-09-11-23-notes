const firstBtn = document.querySelector("button");

//nodeElement.addEventListener("eventType", eventHandlerFunction)
firstBtn.addEventListener("click", (event)=>{
  //the event parameter in the cb will be an object that contains lots of information about the event
  // console.log("clicked on something", event)
  //event.target represents the element that the event occured on
  const parent = event.target.parentNode;
  console.log(parent.parentNode.parentNode.parentNode)
})