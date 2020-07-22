/* eslint-disable no-unused-vars */

// constantes y valores primitivos
const pi = 3.14
console.log(pi)

const obj = {}
console.log(typeof obj)
console.log(obj)
obj.nombre = 'Pepe'
console.log(obj)

// notación JSON u objetos literales
const user = { nombre: 'Maria', edad: 34, fechaDeNacimiento: '23/01/2000' }
console.log(user)

// funciones constructoras
const user2 = Object()
user2.nombre = 'Carlos'
user2.edad = 24
console.log(user2)

const datos = [1, 2, 3, 4, 5, 6]
console.log(typeof datos)
console.log(datos)

// eslint-disable-next-line no-array-constructor
const users = Array('Paula', 'Diana', 'Sofía')
users[1] = 'Lucía'
console.log(users)

user.fechaDeNacimiento = new Date('2000/01/23')
console.log(user)
console.log(parseInt(Math.random() * 10))

const cadena = 'Hola'
console.log(cadena.length) // hace casting string to String
const uper = cadena.toUpperCase()
console.log(uper)
