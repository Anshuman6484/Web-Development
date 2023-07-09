let b = document.body
console.log("first Child of b is : ", b.firstChild)     //returns first child of any type
console.log("first Element Child of b is : ", b.firstElementChild)      //returns first child which is an element

const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
}