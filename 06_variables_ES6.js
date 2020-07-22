/* eslint-disable no-lone-blocks */
let c = 'en el ambito global'
function algo () {
  let b = 'dentro de la funcion'
  {
    let a = 'dentro del bloque'
    console.log(b)
    console.log(c)
  }
}
algo()
