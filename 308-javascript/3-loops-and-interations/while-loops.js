console.log("while loops!")

// 1.
let i = 1;

while (i <= 10) {
    // console.log(i);
    i++
}

// 2.
let x = 30;

while (x > 0) {
    x /= 2;
    x--

    // if we don't have a whole number
    if (x % 1 != 0){
        break;
    }

    //console.log(x);
}

let a = 1;

while (a < 10) {
    // console.log(a)

    a += 2;
}

b = 1;

while (b < 7){
    if (b % 2 === 0){
        // console.log(`${b} is even`)
    } else {
        // console.log(`${b} is odd`)
    }

    b++;
}

/**
 * 
 * Exercise
 * 
 */



// Count down to 0 from a given number
console.log("==========Question 1==========");
// let y = 20;

while (y > 0) {
    // console.log(y);
    y--;
}

// Log integers in multiples of 3 as long as they are less than 35
console.log("==========Question 2==========");
let log = 0;

while (log < 35) {
    if (log % 3 ===0){
        // console.log(log)
    }

    log++;
}

// Print intergers in multiples of 5 as long as they are less than 100
console.log("==========Question 3==========");
let r = 0;

while (r < 100) {
    if (r % 5 ===0){
        // console.log(r)
    }

    r++;
}

// Print all intergers between 0 and 20 with the following conditions
// All numbers divisible by 2 should be multipled by 3 before they are output.
// All other intergers should not be output
console.log("==========Question 4==========");
let p = 0;

while (p < 20) {
    if (p % 2 === 0){
        // console.log(p * 3)
    }

    p++;
}

/**
 * 
 * Romeo went to the vending machine to buy himself a cookie, 
 * which costs $4. He paid with a $10 bill, 
 * and the vending machine gave him his change in quarters.
 * Write a loop that outputs how many quarters Romeo received.
 * 
 */

console.log("==========Bonus Question==========");
let change = 0;

while (change < 6) {
    change += .25;
}

// console.log("You got " + (change/ .25) + " questers as change");

/**
 * 
 *  Do...While Loop
 */

let g = 10;

do{
    g--
    // console.log(g)
} while (g > 50);

/**
 * the code block executes, and THEN the condition is checked
 * vs.
 * a regular whil loop will check the condition FIRST and then run the code block if ture
 */

/**
 * Labeled Statements
 */

let z = 1;
let y = 1;

myLoop: while (true) {
    console.log(`Outer loop ${z}.`);
    z++;

    while(true){
        console.log(`Inner loop ${y}.`);
        y++;

        if (z == 5 && y % 5 == 0){
            break myLoop;
        } else if (y % 5 == 0){
            break;
        }
    }
}

