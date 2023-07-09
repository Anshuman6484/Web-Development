// console.log(window)                      // it is a global object

// DOM : Document object model

// console.log(document.body)
// document.body.style.background = "yellow"

// BOM : Browser object model

// location.href = "https://www.youtube.com"   // it will redirect to twitter.com

/*
let color = prompt("Enter background color")
document.body.style.background = color
*/

let site = prompt("Which website do you want to go?")
location.href = `https://${site}.com`