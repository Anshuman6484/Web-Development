// console.log(window)                      // it is a global object

// DOM : Document object model

// console.log(document.body)
// document.body.style.background = "yellow"

// BOM : Browser object model

// location.href = "https://www.youtube.com"   // it will redirect to twitter.com

let c = prompt("Enter background color : yellow, red, aqua, aquamarine")
if (c == "yellow") {
    document.body.style.background = "yellow"
}
else if (c=="red"){
    document.body.style.background = "red"

}
else if (c=="aqua"){
    document.body.style.background = "aqua"

}
else if (c=="aquamarine"){
    document.body.style.background = "aquamarine"

}