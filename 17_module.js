const createUsers = function (name, codigo) {
  let puestoPriv = ''
  /*
    no se puede acceder porque es la parte PRIVADA del closure
    no se puede acceder dentro del entorno de la function,
    donde se encuentra los parametros de la funcion name, codigo
  */
  return {
    // lo que se retorna es la parte PUBLICA del closure
    // puede o no tener propiedades estáticas
    
    // puesto: '',
    saludar: function () { console.log(`soy ${name} y trabajo de ${this.puesto}`) },
    saludarPriv: function () { console.log(`soy ${name} y trabajo de ${puestoPriv}`) }, // no se puede ver
    verCodigo: function () { console.log(`${codigo}`) },
    setPuesto: (puesto) => { puestoPriv = puesto }
  }
}

const obj1 = createUsers('Juan', 234)

obj1.puesto = 'programador'
obj1.puestoPriv = 'programador'
obj1.setPuesto('programador')

obj1.saludar()
obj1.saludarPriv()
