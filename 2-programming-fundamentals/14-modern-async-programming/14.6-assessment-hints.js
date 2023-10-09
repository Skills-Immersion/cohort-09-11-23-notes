function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

// console.log(isValid({name: "leo"}))


// console.log("hi" && undefined && "ok")