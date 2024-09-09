// Intro to JavaScript

/**
 * This is a
 * multi-line comment
 */

console.log("Hello World!!")

// Different data types

//Number
4
1.1
100

// String

"Hello to String"

// Boolean
true
false

// Null
null

// Undefined
undefined

//Objects - nouns of code
{
    hairColor: "Brown";
}

// Array - List
["Malik", "Jessica", "Abram"]

// Variables
// camelCase
var myVariable = "Some value"; // var is a no no
const PI = 3.14

// let variables
// global scope
let x = 10
// Here x is 10

// Block
{
    let x = 2;
    // Within this block, x is now 2
}

// Outside of the block, x is still 10

let firstName = "Josh";
firstName = "Ken";

// const variables

const foo = 'bar';

foo = 'something else';

// typeof

let myVar = "Hello World";

console.log(typeof myVar);

/**
 * Arithmetic Operators
 */

// addition
console.log(3 + 4);

//subtraction
console.log(3 - 2);

// multiplication
console.log(6 * 4);

// division
console.log(16 / 8);

// modulo
console.log(14 % 3);

let newNumber = 9

// valid ways to add to a varible
newNumber = newNumber + 1;
newNumber += 5;
newNumber *= 2;
newNumber /= 2;

// single-value increments and decrements
newNumber++;
newNumber--;

let someNumber = 9;
let currentNumber = someNumber++;