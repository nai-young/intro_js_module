/* eslint-disable prefer-const */
// A number
let x = 2
let y = '3'
let z = x / y
console.log(z)
console.log(typeof z)

// Casting forzado

console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean(10))

let a = 2
let b = '3'
console.log(a * b)
console.log(a + Number(b))
console.log(a + +b)
