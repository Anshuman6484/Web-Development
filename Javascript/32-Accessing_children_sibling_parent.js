// element.firstChild  ->  first child element
// element.lastChild   ->  last child element
// element.childNodes  ->  all child element

// let arr = Array.from(document.body.childNodes)      //now it is an array
// console.log(arr)


console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)


console.log(document.documentElement.parentElement)     //returns null
console.log(document.documentElement.parentNode)        //returns document

console.log(a.firstChild.nextSibling)       //to get second we have to remove all text nodes