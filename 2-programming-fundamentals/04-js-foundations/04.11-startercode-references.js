/* 
PRIMITIVE DATA TYPES- PASSED BY VALUE:
String - "kljjlkj"
Number - 45, 3.14
Boolean - true/false
Undefined 
Null



REFERENCE DATA TYPES- PASSED BY REFERENCE:
Arrays
Objects
Classes




*/


// WHEN A PRIMITIVE DATA TYPE IS ASSIGNED TO A VARIABLE, THAT VARIABLE GETS ITS OWN COPY
let num1 = 5;
let num2 = num1; //num2 is also set to 5,

//BUT NUM2 AND NUM1 ARE SEPARATE COPIES. SO AFFECTING NUM2 WILL NOT AFFECT NUM1
num2++;
console.log(num1, num2)


// WHEN A REFERENCE DATA TYPE IS ASSIGNED TO A VARIABLE, THAT VARIABLE JUST POINTS TO THAT DATA IN MEMORY (IT REFERENCES THAT DATA RATHER THAN MAKING A SEPARATE COPY)

const artists1 = ["Ice Spice", "Kendrick Lamar", "Edith Piaf", "French Montana"]
const artists2 = artists1;
const artists3 = [...artists1] //to create a separate copy of an array or object, use the spread operator

artists1.push("Taylor Swift");
// console.log(artists1, artists2, artists3);


const person1 = {
  firstName: "Edith",
  topSong: "La Vie En Rose"
}

const person2 = person1;
const person3 = {...person1}

person1.firstName = "Kendrick";

// console.log(person1, person2, person3)

// LETS SEE WHAT HAPPENS IN FUNCTIONS WITH PRIMITIVE TYPES AND REFERNCE TYPES
const x = [1,2,3,4]

function addToend(arr){
  const newarr = [...arr]
  newarr.push(5)
  return newarr
}

addToend(x);
console.log(x)