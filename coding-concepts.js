// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
//console.log(cohort.split(""))

// a) Your answer:
//The console will log ['B', 'r' ,'a' ,'v' ,'o' ,' ','2','0','2','3']

// b) Verify and explain:
//The console logged the above because using the split method without
//a space between the quotation marks separates each character in the string
//The numbers are also in quotation because they're a part of the string
// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:
//The console will log undefined

// b) Verify and explain:
//The console logged undefined because the greeter function
//is not returning anything

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer:
//The console will return a new array with all of
//the values multipled by 2

// b) Verify and explain:
//The console logged a new array with all of
//the values multipled by 2 because the method
//.map() has the variable 'number' passed as a parameter
//which in this case would take the value of each index
//in the array, multiply them by 2, then return a new array
//of all values multiplied by 2


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
//The console will log [11, 13, 15]

// b) Verify and explain:
//The console logged [11, 13, 15] because the .filter() method
//has a parameter named number that takes the value of each index
//in the array, if the value % 2 does not equal 0 that means it is
// an odd number. All of the odd numbers are placed into a new array
// and then returned

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:
//The console will log 'Javascript'

// b) Verify and explain:
//The console logged 'Javascript' because the object has a
//property named 'languages' which can be accsessed using dot
//notation. Within the 'languages' property is an array.
//The [0] index is 'Javascript' which was logged

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
//  console.log(learnStudent)

// a) Your answer:
//The console will log an object with the name 'George', 
//the cohort 'Bravo', and year '2023'

// b) Verify and explain:
//The console logged Learn { student: 'George', cohort: 'Bravo', year: 2023 } because
//the variable 'learnstudent' is creating a new object using the 'Learn' class.
//since 1 argument was passed (name), the constructor places the name into into the first
//properties value 