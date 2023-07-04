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

// while loop
/*
const prompt = require("prompt-sync")()
let n = prompt("Enter a number")
n = Number.parseInt(n)
let i = 1
while (i <= n) {
    console.log(i)
    i++
}
*/

// do-while loop
/*
const prompt = require("prompt-sync")()
let n = prompt("Enter a number")
n = Number.parseInt(n)
let i = 1
do {
    console.log(i)
    i++
} while (i <= n)
*/

// functions

function average(a, b) {

    return (a + b) / 2
    // output will be a floating point number

    // to print round-off value
    // return Math.round((a + b) / 2)
}

const prompt = require("prompt-sync")()
let a = prompt("Enter a number")
a = Number.parseInt(a)
let b = prompt("Enter another number")
b = Number.parseInt(b)
console.log(average(a, b))