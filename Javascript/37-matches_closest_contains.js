let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)

console.log(id1.matches(".class"))              // returns false
console.log(id1.matches(".box"))                // returns true

console.log(sp1.closest("#sp1"))                // returns closest ancestor which matches the CSS-selector

console.log(id1.contains(sp1))                  // returns true
console.log(sp1.contains(sp1))                  // returns true
console.log(sp1.contains(id1))                  // returns false