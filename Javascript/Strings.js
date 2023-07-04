/*
let name1 = "Sumit"
console.log(name1)
let name2 = 'Amit'
console.log(name2)
console.log(name2.length)
*/

// Template literal
/*
let boy1 = "Aman"
let boy2 = 'Ajay'
let friend = `${boy2} is friend of ${boy1}`
console.log(friend)
*/

// String methods
let x = 'Sumit'
console.log(x.toUpperCase())                    //prints SUMIT
console.log(x.toLowerCase())                    //prints sumit
console.log(x.slice(2, 4))                      //prints 'mi'
console.log(x.slice(2))                         //prints 'mit' (from 2 to end)
console.log(x.replace("Su", "A"))               //prints Amit

let y = "Amit"
console.log(x, "is a friend of", y)             // + can also be used for concatenation
console.log(x.concat(" is a friend of ", y, " and mine too "))

let z = "           Aman            "
console.log(z)
console.log(z.trim())                           //removes whitespaces

//Strings are immutable
x[0] = "Y"                                      //This is not possible. It doesn't change x.
console.log(x)

let a = "mit"
console.log(x.includes(a))                      //prints true