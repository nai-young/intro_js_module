/* eslint-disable no-proto */
const obj1 = {
  name: 'Pepe',
  edad: 45,
  saludar: function () { console.log(`hola, soy ${this.name}`) }
}
obj1.saludar()

// function constructora
function Alumno (name, edad) {
  this.name = name
  this.edad = edad
  // this.saludar = function () { console.log(`hola, soy ${this.name}`) }
}
Alumno.prototype.saludar = function () { console.log(`hola, soy ${this.name}`) }

// instanciar objetos
const obj2 = new Alumno('Sara', 20)
const obj3 = new Alumno('Elena', 23)
const obj4 = new Alumno('Carlos', 22)

obj4.altura = 180

console.log(obj2)
console.log(obj3)
console.log(obj4)

// llamar a la funcion que está en el prototipo de la funcion constructora
obj2.saludar()
obj3.saludar()
obj4.saludar()

console.log(obj2.constructor)
console.log(obj2.__proto__)
