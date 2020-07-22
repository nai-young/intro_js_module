// modulos en ES6 (experimental Node): import / export
// modulos en Node: require / export

const fs = require('fs')

// lectura síncrona
const data = fs.readFileSync('package.json', 'utf-8')
const autor = JSON.parse(data).author // convierte string a objetos

console.log(data)
console.log(autor)
console.log('Datos Leídos!')

// lectura asíncrona
console.log('Asíncrono:')

fs.readFile('package.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(JSON.parse(data))
    console.log('Datos Leídos!')
  }
})
console.log('Leyendo datos...')

// Promesas
console.log('Promesas:')

function leerFichero (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
leerFichero('package.json')
// si todo va bien (si se muestran los datos)
  .then(data => {
    const author = JSON.parse(data).author
    console.log('Author Promise: ', author)
  })

  // si hay un error
  .catch(error => {
    console.log(error)
  })
