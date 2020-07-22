/* eslint-disable no-useless-constructor */
class Persona {
  constructor (nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  saludar () { console.log(`Hola, soy ${this.nombre}`) }
}

const obj1 = new Persona('Veronica', 20)
obj1.saludar()

// Herencia objetos ES6
class Alumno extends Persona {
  constructor (nombre, edad, curso) {
    super(nombre, edad)
    this.curso = curso
  }

  saludarAlumno () {
    super.saludar()
    console.log(`y estudio ${this.curso}`)
  }
}
const obj2 = new Alumno('Alicia', 13, 'JavaScript')
console.log(obj2)
obj2.saludarAlumno()
