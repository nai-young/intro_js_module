/* eslint-disable no-unused-vars */
'use strict'
// Metodos de invocacion de las funciones

const algo = function () {
  console.log(this)
}

// invocacion tipo function
algo()

// invocacion tipo constructor
const obj = new algo()

// invocacion tipo method
const obj2 = {
  name: 'Pepe',
  metodo: algo
}
obj2.metodo()

// invocacion tipo call/apply
const obj3 = {
  usuario: 'Sara'
}
obj2.metodo.call(obj3)

// uso this dentro de los callbacks asíncronos
const usarThis = {
  name: 'ejemplo de this',
  ver: function () {
    console.log(this)
  },
  verAsync: function () {
    setTimeout(function () {
      console.log(this)
    }, 2000)
  },
  verAsyncBind: function () {
    setTimeout(function () {
      console.log(this)
    }.bind(this), 3000)
  },
  verAsyncArrow: function () {
    setTimeout(() => {
      console.log(this)
    }, 4000)
  }
}
usarThis.ver()
usarThis.verAsync()
usarThis.verAsyncBind()
usarThis.verAsyncArrow()
