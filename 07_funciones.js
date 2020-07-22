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
