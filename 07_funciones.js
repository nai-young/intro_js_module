// declaración
function suma (a = 0, b = 0) {
  return +a + +b
}

// invocar
console.log(suma())

// asignacion
const resta = function (a = 0, b = 0) {
  return a - b
}
console.log(resta(5, 2))

// ES6 arrow functions
const producto = (a = 1, b = 1) => a * b
console.log(producto(2, 3))

const cuadrado = a => a * a
console.log(cuadrado(4))
