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
/*
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
// delete num[0] -> deletes 1st element, doesn't change the length of array

let num_2 = [74, 9, 83, 111]
let newArray = num.concat(num_2)            //doesn't modify original array(num)
console.log(newArray)

// sort() -> sort the array in alphabetical order, modifies original array, it considers elements as strings
console.log(num_2.sort())                   // prints 111, 74, 83, 9

let comp = (a, b) => {
    return a - b
}
console.log(num_2.sort(comp))               // prints in ascending order

// reverse() -> reverse the array
*/

// Splice And Slice

// syntax : array.splice(start, no.of elements to be deleted, keys to be added)

/*
let num = [1, 2, 5, 84, 3]
num.splice(2, 2, 74, 73, 83, 826)           // returns deleted elements, modifies original array
console.log(num)

console.log(num.slice(2))                   //prints from index 2 to end
console.log(num.slice(2, 4))                //prints from index 2 to index 3
// slice doesn't modify original array
*/
//let num = [1, 2, 3, 4, 5]
/*
//for Each loop
num.forEach((key) => {
    console.log(key * key)                    //prints square of each element
})
*/
//Array from
/*
let name1 = "Amit"
let arr = Array.from(name1)                  //converts string(anything) to array
console.log(arr)

//for of loop
for (i of num) {
    console.log(i)                          //prints array elements
}

//for in loop
for (i in num) {
    console.log(i)                          //prints index of array
    console.log(num[i])                     //prints array elements
}*/

let arr = [63, 73, 82, 35, 12]

//Map method
//syntax of map -> arr.map(value,index,array), except value all are optional
let a = arr.map((value) => {                //it creates a new array
    console.log(value)
    return value * 10
})
console.log(a)

//Filter method
let b = arr.filter((value) => {             //creates new array
    return value > 50
})
console.log(b)

//Reduce method
let c = arr.reduce((h1, h2) => {            //returns a value,here prints sum of array elements
    return h1 + h2
})
console.log(c)
