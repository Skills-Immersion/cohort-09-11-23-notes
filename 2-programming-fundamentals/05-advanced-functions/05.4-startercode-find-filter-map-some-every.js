/* 
.find() -> loop through the array to find the first element that matches a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: FOUND ELEMENT OR UNDEFINED
  -CALLBACK FUNCTION DETAILS:
    - CB PARAMETERS: ELEMENT AND INDEX
    - CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .find() method will LOOP and return the FIRST ELEMENT that the condition evaluates true for or undefined if the condition is falsy for every element


.filter() -> loop through the array to create a new array with elements that match a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: NEW ARRAY WITH MATCHING ELEMENTS or EMPTY ARRAY []
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .filter() method will create a new array with elements that the condition evaluates true for.


.map() -> loop through the array to create a new array with transformed elements.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: NEW ARRAY WITH TRANSFORMED ELEMENTS
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A TRANSFORMATION - the callback function has to return a transformed value for each element. The .map() method will create a new array with the transformed elements.


.some() -> loop through the array to check if at least one element matches a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: BOOLEAN
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .some() method will return true if the condition evaluates true for at least one element or false if the condition is falsy for every element.


.every() -> loop through the array to check if every element matches a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: BOOLEAN
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .every() method will return true if the condition evaluates true for every element or false if the condition is falsy for at least one element.

*/

const employees = [
  {
    name: "Lebron James",
    salary: 110000,
    company: {
      name: "Google",
      city: "Reston",
      state: "Virginia",
    },
    languages: ["Javascript", "Java", "Python"],
  },
  {
    name: "Scooby Doo",
    salary: 200000,
    company: {
      name: "GreenChef",
      city: "New York City",
      state: "New York",
    },
    languages: ["Html", "Css"],
  },
  {
    name: "Larry David",
    salary: 80000,
    company: {
      name: "Comedy Central",
      city: "Los Angeles",
      state: "California",
    },
    languages: ["Javascript", "Java", "Python"],
  },
  {
    name: "Beyonce",
    salary: 90000,
    company: {
      name: "Google",
      city: "Brooklyn",
      state: "New York",
    },
    languages: ["Javascript", "Java", "Python"],
  }
];



//find an employee who is named "Larry David"
function findEmployeeByName(employees=[], name="") {
  const foundElement = employees.find((employeeObj, idx)=>{
    //return a statement that evaluates to a boolean
    return employeeObj.name === name;
    // return false;
  })
  
  if(foundElement === undefined) return null;
  return foundElement;
}


console.log(findEmployeeByName(employees, "rob"))

//EXAMPLE OF FILTER - when you want multiple elements that match
function findAllEmployeesByName(employees=[], name="") {
  const foundElement =  employees.filter((employeeObj, idx)=>{
    //return a statement that evaluates to a boolean
    return employeeObj.name === name;
    // return false;
  })
  return foundElement;
}

function findAllEmployeesByName(employees=[], name="") {
  return employees.filter(employeeObj=>employeeObj.name === name)
}

/* 
return employeeObj.name === name; -> lebron james === "Larry David"
return employeeObj.name === name; -> scooby doo === "Larry David"
return employeeObj.name === name; -> larry david === "larry david"
*/

// console.log(findAllEmployeesByName(employees, "Rob"))

//get all the employees who are making over a given amount
function findHighEarners(employees=[], amount=0) {
  const result = employees.filter((employeeObj, idx)=>{
    return employeeObj.salary > amount;
  })
  return result;
}




// console.log(findHighEarners(employees, 100000))
// console.log(findHighEarners(employees, 150000))


//use .some() to check if any employees are from a company with the name "Comedy Central"
function doesCompanyHaveEmployee(employees=[], companyName="") {
  const result = employees.some((employeeObj, idx)=>{
    return employeeObj.company.name === companyName
  })
  return result;
}

// console.log(doesCompanyHaveEmployee(employees, "Google"))
// console.log(doesCompanyHaveEmployee(employees, "Apple"))


//use .every() to indicate whether every employee is making over a certain salary
function areAllEmployeesGettingPaidGivenAmount(employees=[], amount=0) {
  const result = employees.every((employeeObj, idx)=>{
    return employeeObj.salary > amount;
  })
  return result;
}

// console.log(areAllEmployeesGettingPaidGivenAmount(employees, 50000))
// console.log(areAllEmployeesGettingPaidGivenAmount(employees, 200000))




//.map() - give back a new array containing only the company names and city for each employee in the given list
function getOnlyNames(employees=[]){
  const result = employees.map((employeeObj, idx)=>{
    //return the transformation
    return employeeObj.name;
  })
  return result;
}

// console.log(getOnlyNames(employees))

function findCompanyNamesAndCity(employees=[]) {
  const result = employees.map((employeeObj, idx)=>{
    //return the transformation
    return {companyName: employeeObj.company.name, city: employeeObj.company.city}
  })
  return result;
}

// console.log(findCompanyNamesAndCity(employees))






/* ADVANCED: HOW TO COMBINE THESE METHODS FOR MORE COMPLEX PROBLEMS */

/* USE FILTER() AND MAP() TO GIVE BACK A NEW ARRAY CONTAINING ONLY THE COMPANY NAMES AND CITY FOR EACH EMPLOYEE IN THE GIVEN LIST WHO HAVE A SALARY GREATER THAN OR EQUAL TO A GIVEN AMOUNT

HINT: USE .FILTER() TO GET BACK ONLY THE EMPLOYEES WHO MAKE A GIVEN AMOUNT OR MORE, THEN USE .MAP TO TRANSFORM THAT DATA TO A NEW ARRAY CONTAINING THE COMPANY NAMES AND CITY OF THOSE EMPLOYEES
*/

function getNamesOfHighPayingCompanies(employees=[], amount=0){
  //1. filter through employees to only get employees making over a given amount
  const highEarners = employees.filter((employeeObj,idx)=>{
    return employeeObj.salary > amount;
  })

  //You can also use the findHighEarners function we already made to help us with this instead
  // const highEarners = findHighEarners(employees, amount)
  // console.log(highEarners)

  //2. from the filtered data, map it to only the company names;
  const namesOnly = highEarners.map((employeeObj, inx)=>{
    return employeeObj.company.name;
  })

  return namesOnly
}

console.log(getNamesOfHighPayingCompanies(employees, 100000))

/* METHOD TO FIND IF ANY EMPLOYEE FROM A GIVEN STATE HAS A SALARY OF OVER A GIVEN AMOUNT */

function anybodyFromGivenStateMakingOverGivenAmount(employees=[], stateName="", amount=0){
  //1 filter to get only employees who work in (given state)
  const employeesFromState = employees.filter((employeeObj)=>{
    return employeeObj.company.state === stateName
  })
  //2.check if anye employee from the filterd list is making over given amount
  const result = employeesFromState.some((employeeObj)=>{
    return employeeObj.salary > amount
  })

  return result;
}

console.log(anybodyFromGivenStateMakingOverGivenAmount(employees, "New York", 100000))
