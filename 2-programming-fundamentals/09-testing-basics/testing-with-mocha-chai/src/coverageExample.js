function assignGrade(score) {
  let result = "F"; //y

  if (score >= 0.9) { //y
    result = "A"; //y
  } else if (score >= 0.8) { //n
    result = "B"; //n
  } else if (score >= 0.7) { //n
    result = "C"; //n
  }

  return result; //y
}

module.exports = assignGrade;