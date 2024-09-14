// For Loop structure

// for (initialization; condition; afterthought) {
// 	statements
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);   
// }

// // Loop from 1 to 20

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

/**
 * Exercise 1.
 * 
 */
// console.log("========== Question 1 ==========")
for (let i = 10; i > 1; i--) {
    // console.log(i)
}

// console.log("========== Question 2 ==========")
// 2. Output odd numbers from 1 to 10
for (let i = 1; i <= 10; i += 2) {
    //console.log(i)
}

// console.log("========== Question 3 ==========")
// 3. Output even number from 1 to 10
for (let i = 2; i <= 10; i += 2) {
    // console.log(i)
}

// console.log("========== Question 4 ==========")
// 4. Output multiples of 3, starting at 6 and ending at 60
for (let i = 6; i <= 60; i += 3) {
    //console.log(i)
}

// console.log("========== Question 5 ==========")
// 5. Output an increasing number of # symbols, form 1 to 7, as shown below
for (let i = "#"; i.length < 8; i += "#") {
    // console.log(i)
}

// Looping through Iterables

const str = "Hello World";

for (let i = 0; i < str.length; i++) {
	//console.log(str[i]);
}

/**
 * 
 * For ... In Loops
 * 
 */

const phrase2 = "Hello World! 2024-RTT-42 is cool";

for (const i in phrase2){
    //console.log(phrase2[i]);
}

/**
 * 
 * For ... Of Loops
 * 
 */

const phrase3 = "Goodbye World, Hello Moon!"

for (const c of phrase3) {
    // console.log(c);
}

/**
 * 
 * The Continue Statement in For Loops
 * 
 */

for (let i = 0; i < phrase3.length; i++) {
    if (phrase3[i] === "G") {
        continue;
    }

    // console.log(phrase3[i]);
}

// Print all even nums
for (let i = 1; i <= 20; i++) {
    if (i % 2 !==0){
        // checking if i is odd
        continue;
    }
    
    // console.log(i);
}

/**
 * In a for...in or for...of loop, the continue statement 
 * simply jumps to the next iteration (since there is no afterthought expression):
 */


/**
 * 
 * 
 * Nested Loops
 * 
 * 
 */

for (let i = 0; i < 5; i++) {
    // console.log("Outer loop: ", i)
    for (let j = 0; j < 5; j++) {
        // console.log("inner loop: ", j)
    }
}

/**
 * 
 * 
 *  Prime Number Exercise
 * 
 * 
 */

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0){
        console.log(`${i}: even`)
    }

    if (i % 2 !== 0){
        console.log(`${i}: odd`)
    }

    if (i <= 3){
        continue;
    }


    
}


