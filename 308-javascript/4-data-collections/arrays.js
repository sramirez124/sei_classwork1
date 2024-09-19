console.log("Arrays!");

// Creating Arryas

// Using a Class/Constructor Function (less common syntax)
let nums = new Array(2, 3, 18);
let nums2 = Array(2, 4, 18);

// Using Array Literal syntax (recommended best practice)
// Keep Array same data type
let nums3 = [2, 4, 13];

// Exercise
// Create an array consisting of three of your favorite movies (strings) 
// and assign it to a variable named movies.

// Arrays start at 0 favoriteMovieList[0] = "Fear and Loathing in Las Vegas"
const favoriteMovieList = ["Fear and Loathing in Las Vegas", "Harry Potter", "The Warriors"];
let firstMovie = favoriteMovieList[0];  // "Fear and Loathing in Las Vegas"
// console.log(firstMovie);

// Displays how many things are in the array
// console.log(favoriteMovieList.length);

// How to change an item in an array
// favoriteMovieList[1] = "Batman";

favoriteMovieList[favoriteMovieList.length] = "Burn After Reading";
for (let i = 0; i < favoriteMovieList.length; i++) {
    console.log(`${i + 1}` + ":", favoriteMovieList[i]);
}

// ======================================================================================
/**
 * 
 * Hoisting Explained
 * 
 */

fnDeclaration(); // thank you function declarations :)
fnExpression(); // TypeError: fnExpression is not a function

function fnDeclaration(){
    // console.log("I'm coming from a dunction declaration.");
}

const fnExpression = function(){
    // console.log("I'm coming from a function expression.");
};

// fnExpression(); // works just fine, because we are referencing after it's been defined.
// ======================================================================================

