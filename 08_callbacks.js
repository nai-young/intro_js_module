// ejemplo de jsdoc
/**
 * muestra los calculos de lo que recibe como callback
 * @param {number} a 
 * @param {number} b 
 * @param {function} cb 
 */


const calcular = function (a, b, cb) {
  console.log(cb(a, b))
}
const producto = (a, b) => a * b

calcular(6, 5, (a, b) => a + b)
calcular(6, 5, producto)

const data = [2, 6, 3, 7, 4]
const cubos = data.map(item => item * item * item)
console.log(cubos)
