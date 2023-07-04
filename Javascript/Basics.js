// for loop
/*
let sum = 0;

// header file to use prompt function
const prompt = require("prompt-sync")()
let n = prompt("Enter a number")

// prompt accepts input as string,so we have to change the data type
n = Number.parseInt(n)
for (let i = 1; i <= n; i++)
    sum += i

console.log(sum)
*/

// for-in loop
/*
let obj = {
    amit: 90,
    sumit: 95,
    rohit: 94
}
for (let a in obj) {
    // to print keys
    console.log(a)

    // to print values
    console.log(obj[a])
}
*/

// for-of loop
/*
for (let b of "abcd") {
    console.log(b)

    // "abcd" must be iterable like an array or string
}
*/