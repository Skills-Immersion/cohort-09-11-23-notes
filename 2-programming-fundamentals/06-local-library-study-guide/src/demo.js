/* 

*/

const courses = require("../data/courses");
const instructors = require("../data/instructors");
const students = require("../data/students");

//1. Get Total courses count
function getTotalCoursesCount(courses=[]) {
    return courses.length;
}

// console.log(getTotalCoursesCount(courses))

//2. Get Total accounts count
function getTotalStudentsCount(students=[]) {
    return students.length;
}

//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id
function findInstructorById(instructors=[], id=0) {
    return instructors.find((instructorObj)=>{
        return instructorObj.id === id;
    })
    // return result;
}

// console.log(findInstructorById(instructors, 3))

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id
function findCourseById(courses, id) {
    
}

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students, id) {
    return students.find((studentObj)=>{
        return studentObj.id === id;
    })
}

//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students=[]) {
    students.sort((studentA, studentB)=>{
        // if(studentA.name.first.toLowerCase() < studentB.name.first.toLowerCase()){
        //     return -1;
        // }else{
        //     return 1;
        // }

        return studentA.name.first.toLowerCase() < studentB.name.first.toLowerCase() ? -1 : 1;
    })
    return students;
}

// console.log(sortStudentsByFirstName(students))

//7. Partition courses by student on pace
//find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace
/* 
[
    [{psych of alpacas}, {financal management}], //on pace courses
    [{js fun}, {python fun}] //not on pace courses
]

*/
function partitionCoursesByStudentProgress(courses=[]) {
    //array for onPace
    const onPace = []
    //array for notOnPace
    const notOnPace = []

    courses.forEach((courseObj)=>{
        //look at the roster property of the courseObj
        const {roster} = courseObj;
        const isNotOnPace = roster.some((element)=>{
            return element.onPace === false
        })
        if(isNotOnPace === true){
            //insert the current course to the notOnPace array
            notOnPace.push(courseObj)
        }else{
            onPace.push(courseObj)
        }
    })

    return [onPace, notOnPace]
}

function partitionCoursesByStudentProgress2(courses=[]) {
    //array for onPace
    const onPace = courses.filter((courseObj)=>{
        const {roster} = courseObj;
        const isOnPace = roster.every((element)=>{
            return element.onPace === true
        })
        return isOnPace
    })

    const notOnPace = courses.filter((courseObj)=>{
        const {roster} = courseObj;
        const isNotOnPace = roster.some((element)=>{
            return element.onPace === false
        })
        return isNotOnPace
    })

    return [onPace, notOnPace]
}

// console.log(partitionCoursesByStudentProgress2(courses))

/* 

8. getStudentsForCourse - Given a course object, for its course roster, and a students array, return an array of students that match the courses roster list, and add the onPace property from the roster objects to the student object. 

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true
        },
        {
            studentId: 2,
            onPace: false
        },
        {
            studentId: 3,
            onPace: true
        },
        {
            studentId: 4,
            onPace: true
        },
        {
            studentId: 5,
            onPace: true
        }
    ]
}

[
    {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
        onPace: true
    }, 
    {
        id: 3,
        name: {
            first: "Mickey",
            last: "Mouse"
        },
        onPace: true
    },
    {
        id: 5,
        name: {
            first: "Patrick",
            last: "Star"
        },
        onPace: true
    }

]

*/

function getStudentsForCourse(course={}, students=[]) {
    //have an array to store teh results in []
    const result = [];
    //look at the course's roster
    const {roster} = course;
    //go through every element in the roster array and FOREACH element do:
    roster.forEach((rosterObj)=>{
        //look at the studentId property
        const {studentId, onPace} = rosterObj;
        // const studentId = rosterObj.studentId;
        // const onPace = rosterObj.onPace;

        //find the studnet in the students array whose id is === studentId
        const foundStudent = students.find((studentObj)=>{
            return studentObj.id === studentId;
        })
        //add the onPace property to the found student and then push it to the result array
        foundStudent.onPace = onPace;
        result.push(foundStudent);
    })
    return result;
}

function getStudentsForCourse2(course={}, students=[]) {
    //look at the course's roster
    const {roster} = course;
    //go through every element in the roster array and FOREACH element do:
    const result = roster.map((rosterObj)=>{
        //look at the studentId property
        const {studentId, onPace} = rosterObj;

        //find the studnet in the students array whose id is === studentId
        // const foundStudent = students.find((studentObj)=>{
        //     return studentObj.id === studentId;
        // })
        //YOU CAN ALSO USE THE FINDSTUDENTBYID FUNCTION TO HELP HERE
        const foundStudent = findstudentById(students, studentId);
        //add the onPace property to the found student
        foundStudent.onPace = onPace;

        //return the foundStudent so that it gets inserted into result
        return foundStudent
        // result.push(foundStudent);
    })

    return result;
}

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true,
        },
        {
            studentId: 3,
            onPace: true,
        },
        {
            studentId: 5,
            onPace: true,
        },
    ],
};

// console.log(getStudentsForCourse2(oneCourse, students))

/* 
9. getTotalNumberOfClassesForStudent- Given a student object and an array of course objects, find the number of times this student object's id appears in the all the courses rosters array

let student1 = {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
    }
*/

function getTotalNumberOfClassesEnrolledIn(student={}, courses=[]) {
    //total = 0
    let total = 0;
    //look at students id - id
    const {id} = student;
    //look at the courses array. for each element (courseObj) in the courses array do:
    courses.forEach((courseObj)=>{
        //look at the roster
        const {roster} = courseObj;
        //for each element (rosterObj) in the roster array do:
        roster.forEach((rosterObj)=>{
            //look at the studentId of the rosterObj
            // if the studentId === given students id (id), increment total by 1
            if(rosterObj.studentId === id){
                total++
            }
        })
    })
    
    // return total
    return total;
}


function getTotalNumberOfClassesEnrolledIn2(student={}, courses=[]) {
    //look at students id - id
    const {id} = student;
    //look at the courses array. for each element (courseObj) in the courses array do:
    let total = courses.reduce((acc, courseObj)=>{
        //look at the roster
        const {roster} = courseObj;
        //for each element (rosterObj) in the roster array do:
        const filteredResult = roster.filter((rosterObj)=>{
            return rosterObj.studentId === id
        })
        acc += filteredResult.length;
        return acc;
    },0)
    
    // return total
    return total;
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

// console.log(getTotalNumberOfClassesEnrolledIn2(student1, courses));

/* 
10- Given a student object, an array of course objects and an array of authors objects-> give back all the course objects including the instructor information embedded into the course object for the courses the student is enrolled in (hint for getBooksPossessedByAccount())



*/



function getCoursesStudentEnrolledIn(student={}, courses=[], instructors=[]) {
    const result = []
    //look at the id of the given student - id
    const {id} = student;
    //look at each courseObj in courses and foreach courseObj do:
    courses.forEach((courseObj)=>{
        const {roster,instructorId} = courseObj;
        //look at the roster and for each rosterObj do:
        roster.forEach((rosterObj)=>{
            //check if the rosterObj.studentId === id. if so push the current courseObj to our result
            if(rosterObj.studentId === id){
                //get the author information for this courseObj and add the author info as a key into the course obj
                const instructor = findInstructorById(instructors, instructorId)
                // const instructor = instructors.find((instructorObj)=>{
                //     return instructorObj.id === instructorId
                // })
                courseObj.instructor = instructor
                //puth the courseObj to result
                result.push(courseObj)
            }
        })
    })
    
    return result
}  

let student3 = {
    id: 3,
    name: {
        first: "Mickey",
        last: "Mouse",
    },
};

// console.log(getCoursesStudentEnrolledIn(student3, courses, instructors));

/*
11. Get count of courses who have at least on student not onPace- similar to getBooksBorrowedCount(books)
*/

function getCoursesNotOnPaceCount(courses) {
    // const [,notOnPaceCourses] = partitionCoursesByStudentProgress(courses)
    const partitionResult = partitionCoursesByStudentProgress(courses)
    const notOnPaceCourses = partitionResult[1]
    return notOnPaceCourses.length;
}

// console.log(getCoursesNotOnPaceCount(courses));

/* 
12. Get most common course categories. Output in this format:

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]

lookup: {
   "SWE": 2,
   "Psychology": 1,
   "Finance": 1
}

*/

// let obj = {}
// let y = "x"
// obj.x = "hi"
// obj["x"] = "hi"
// obj[y] = "hi"

const getMostCommonCategories = (courses=[]) => {
    const lookup = {};
    courses.forEach(courseObj=>{
        const {category} = courseObj;
        // if(lookup[category] === undefined)
        if(!lookup[category]){
            lookup[category] = 1;
        }else{
            lookup[category]++;
        }
    })
    //at this point, lookup will look something like this: { 'Software Engineering': 3, Psychology: 3, Finance: 1 }
    //now we will create the array of objects using the lookup data
    const result = [];
    for(let categoryNameKey in lookup){
        const obj = { name: categoryNameKey, count: lookup[categoryNameKey] };
        result.push(obj)
    }

    //sort the result based on the count
    result.sort((elementA, elementB)=>{
        return elementB.count - elementA.count;
    })
    return result.slice(0,2);
    // console.log(lookup)
};

console.log(getMostCommonCategories(courses));

/* 
13. Get most popular courses- find the top 3 largest courses based on roster size


Output in this format: 
[
  { name: 'Javascript Fundamentals', rosterSize: 5 },
  { name: 'Bread And Cheddar- The Fundamentals', rosterSize: 4 },
  { name: 'Python Fundamentals', rosterSize: 3 }
]
*/

function getMostPopularCourses(courses) {
    //find the most pop

}

// console.log(getMostPopularCourses(courses));

/* 

14. Get instructors of largest classes.

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function instructorsOfLargestClasses(courses, instructors) {
   
}

function helperJoinFirstAndLastNames(first, last) {
    return `${first} ${last}`;
}

// console.log(instructorsOfLargestClasses(courses, instructors));

