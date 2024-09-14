// const num = 18;

// if (num > 0){
//     console.log("Number " + num + " is positive!")
// } else {
//     console.log("Number " + num + " is negative!")
// }

// let userAge = 13;
// const minAge = 18;

// if (age > minAge){
//     console.log("Access Granted, Welcome!")
// } else {
//     console.log("Access Denied!")
// }

// if (num >= 100 && num > 0){
//     console.log("Number is greater than 100 and positive")
// } else if(num < 100 && num > 0){
//     console.log("Number is less than 100 and positive")
// } else {
//     (num < 0)
//     console.log("Number is negative")
// } 

// const grade = 90;

// if (grade >= 90){
//     console.log("A")
// } else if (grade >= 80){
//     console.log("B")
// } else if (grade >= 70){
//     console.log("C")
// } else if (grade >= 55){
//     console.log("D")
// } else {
//     console.log("F")
// }

let x = 10;
let isEven;

try {
    if (x > 0) {
        isEven = (x % 2 == 0) ? false : true;
    } else if (x <= 0) {
        throw "Error - Value of 0 or below.";
    }

    console.log(isEven);
    } catch (err) {
        console.log(err);
    } finally {
        console.log(x);
}