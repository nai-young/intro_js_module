const padre = {
  name: 'Pepe',
  apellido: 'Lopez',
  edad: 22,
  saludar: function () { console.log(`Hola, soy ${this.name} ${this.apellido} y tengo ${this.edad} años`) }
}
padre.saludar()

// Object = el prototipo del objeto
const hijo = Object.create(padre)
hijo.name = 'Luis'
hijo.edad = 15
hijo.saludar()
