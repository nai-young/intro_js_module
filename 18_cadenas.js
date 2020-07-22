const cadena = 'esto es una cadena'

// al poner el punto (cadena.) hace casting al objeto String y a sus metodos
// el metodo join devuelve un string sin ningun separador

const cadenaSinEspacios = cadena.split(' ').join('').toUpperCase()
const cadenaInversa = cadena.split(' ').reverse().join('').toUpperCase()

console.log(cadenaSinEspacios)
console.log(cadenaInversa)

const arrayDatos = [12, 3, 5, 10, 6]
const arrayDatosCopia = arrayDatos.slice(0) // funcion inmutable

arrayDatosCopia.sort((a, b) => a - b) // funcion mutable
// si no le ponemos una funcion a sort(), ordena alfabeticamente (120, 23, 3009, 410) = 1, 2, 3, 4

console.log(arrayDatos)
console.log(arrayDatosCopia)

const dobles = arrayDatos.map(item => item * 2)
console.log(dobles)
