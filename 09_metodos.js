const usuario = { nombre: 'Pepe', edad: 23 }
usuario.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}
usuario.saludar()