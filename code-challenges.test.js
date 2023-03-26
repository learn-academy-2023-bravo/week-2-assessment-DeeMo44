// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
//create a test for a function named 'multiply'
describe('multiply', () => {
  //tell how the function is supposed to function
  it("returns an array with all the numbers multiplied by 3", () => {
    //hardcode what you would pass as an argument and what the 
    //expected outcomes will be.
    expect(multiply([6, 7, 8, 9, 10])).toEqual([18, 21, 24, 27, 30])
    expect(multiply([24, 27, 30, 33, 36])).toEqual([72, 81, 90, 99, 108])
  })
})

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.
//Create a function named 'multiply' that takes an array as a parameter.
//Use the .map() method to traverse the array and multiply all values by 3.
//Place all new values into a new array and return that array.
const multiply = (array) => (array.map((value) => value*3))
// console.log(multiply(numbersArray1)) --> [ 18, 21, 24, 27, 30 ]
// console.log(multiply(numbersArray2)) --> [ 72, 81, 90, 99, 108 ]

//Note: I wasnt sure if i was supposed to have the variables in the test or not so I will do that for now on.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
//Create a test for a function named 'divisbleBy3'.
describe('divisibleBy3', () => {

  //Explain how the function is supposed to perform
  it('takes a object as an argument and decides if the number inside it is evenly divisible by three or not', () => {

    //variables for the expect
    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"

    //hardcode what you would pass as an argument and what the 
    //expected outcomes will be.
    expect(divisibleBy3(object1)).toEqual("15 is divisible by three")
    expect(divisibleBy3(object2)).toEqual("0 is divisible by three")
    expect(divisibleBy3(object3)).toEqual("-7 is not divisible by three")
  })
})

// b) Create the function that makes the test pass.
//create a function named 'divisibleBy3' that takes an object as an argument.
const divisibleBy3 = (object) => {
  //If the number found within the object is divisible by 3 return, use string
  //interpolation to state that it is divisible by 3.
  if (object.number % 3 === 0){
    return `${object.number} is divisible by three`

    //If the number found within the object is not divisible by 3 return, use string
    //interpolation to state that it is not divisible by 3.
  } else if (object.number % 3 !== 0){
    return `${object.number} is not divisible by three`

    //If all ifs fails, something went wrong
  } else {
    return 'Something wwent wrong'
  }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
//Create a test for a function named variable.
describe('capitalized', () => {

  //Explain how the function is supposed to perform.
  it("takes in an array of words and returns an array with all the words capitalized", () => {

    //Variables that are used for the expect.
    const randomNouns1 = ["streetlamp","potato","teeth","conclusion","nephew",];
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    
    //hardcode what you would pass as an argument and what the 
    //expected outcomes will be.
    expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

// b) Create the function that makes the test pass.
//create a function named 'capitalized' that takes an array as an argument. Use the .map() method to iterate through
//the array. Use the .charAt() method to take the first character of each value which in this case would be the first
//letter of each word - set that character to uppercase using .toUpperCase() method. add the additional characters of
//each value using the .slice() method. We use .sclice(1) to take the remaining characters of each word and return a new
//array with all the words capitalized.
const capitalized = (array) => {return array.map((value) => value.charAt(0).toUpperCase()+value.slice(1))}
//Note: this one was especially difficult to figure out. If there is an easier to understand method please
//let me know. looking at it makes my eyes hurt.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
//Create a test for a function named 'firstVowel'.
describe('firstVowel', () => {

  //Explain how the function is supposed to perfrom.
  it('takes in a string and logs the index of the first vowel', () => {

    //Variables that will be used for the expect.
    const vowelTester1 = "learn";
    // Expected output: 1
    const vowelTester2 = "academy";
    // Expected output: 0
    const vowelTester3 = "challenges";
    // Expected output: 2

    //hardcode what you would pass as an argument and what the 
    //expected outcomes will be.
    expect(firstVowel(vowelTester1 )).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

// b) Create the function that makes the test pass.
//Note: I have attempted to use filter and map methods but I can't seem to figure it out,
//if there is a way please let me know.

//Create a function named firstVowel that takes a string as a parameter.
const firstVowel = (string) => {
  //create a for loop that iterates through the given strings.
  for (let i = 0; i < string.length; i++){
    //If, while iterating, i is the same as a vowel we return it which ends the loop.
    //We check to see if i is the same as a vowel by using the .includes method.
    if (['a', 'e', 'i', 'o', 'u'].includes(string[i])){
      return i
    }
  }
  //When the loop ends and there is no vowel we return 0.
  return 0
}