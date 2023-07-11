// console.dir()           // it shows element as an object with its properties

let x = document.getElementsByTagName('span')[0]
console.log(x)
console.dir(x)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

// innerHTML

// element.innerHTML -> get HTML inside element as string(valid for element nodes only)
console.log(first.innerHTML)

// outerHTML

// element.outerHTML -> get HTML inside element + element itself
console.log(first.outerHTML)

// innerHTML and outerHTML works only for element nodes.For other node types use `data` or `nodeValue`

console.log(document.body.textContent)          // prints all text inside body 

// hidden property

first.hidden = true                             // hides element with id first(here span tag)