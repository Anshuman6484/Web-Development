/*
let marks = [94, 96, 82, "Not Present", null]
console.log(marks)
console.log(marks[4])
console.log(marks[5])                       //prints undefined
console.log(marks.length)

marks[5] = 74
console.log(marks[5])                       //prints 74
console.log(marks.length)                   //prints 6


// Arrays are mutable
marks[0] = 98
console.log(marks[0])                       //changing the value of an array
*/

// Array methods

let num = [1, 2, 5, 84, 3]

let b = num.toString()                      //converts b to string
console.log(b, typeof b)                    //b is string

let c = num.join("_")                       //prints 1_2_5_84_3
console.log(c, typeof c)                    //c is string

let r = num.pop()                           //pop last element from array
console.log(num, r)

num.push(56)                                //push element at the end of array
console.log(num)

// shift() -> pop an element from beginning of array. It also changes the array. Returns length of array
// unshift() -> push an element at the beginning of array. It also changes the array. Returns length of array