// Change card title to different color

// Using document.getElementById
// document.getElementById("first-card-title").style.color = "blue"

// Using document.getElementByClassName
// document.getElementsByClassName("card-title")[0].style.color = "red"

// Using querySelectorAll
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "red"
ctitles[1].style.color = "green"
ctitles[2].style.color = "blue"
console.log(ctitles)

// Using querySelector(querySelectorAll[0])
document.querySelector(".somewhere").style.color = "cyan"
document.querySelector(".somewhere").style.background = "black"

// getElementsByTagName
console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))