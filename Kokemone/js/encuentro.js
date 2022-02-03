const grass = document.querySelectorAll('.grass');

const chance = 10
const magicn = 4 
console.log(grass)
// grass.addEventListener("click", () => number())
// grass.addEventListener("click", marsa(2))
// function marsa(x) {
//     console.log(x)
// }
// console.log(grass)

function number() {
    let x = Math.floor(Math.random() * chance)
    console.log(x)
    if ( x === magicn) {
        console.log("sale kokemon")
    }
}
