const edad = 20
let tipo = 'adulto' // nos ahorramos el else

if (edad < 18) {
  tipo = 'menor'
} else if (edad > 30) {
  tipo = 'joven'
}

const dia = 'jueves'
switch (dia) {
  case 'lunes':
    // ...
    break
  case 'martes':
    // ...
    break
  default:
    // ...
    break
}

const datos = [3, 5, 7, 11]
for (let i = 0; i < datos.length; i++) {
  const item = datos[i]
  console.log(`el valor ${i + 1} el ${item}`)
}

// ES6
for (const iterator of datos) { // como .forEach
  console.log(`el valor es ${iterator}`)
}

// ES5.1
datos.forEach(item => {
  console.log(`el valor es ${item}`)
})

const usr = { nombre: 'Pepe', edad: 23, altura: 180 }

for (const key in usr) {
  const value = usr[key]
  console.log(`la propiedad ${key} vale ${value}`)
}
