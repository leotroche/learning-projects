// import { eng } from './lang/eng.json'
// import { fra } from './lang/fra.js'
// import { ger } from './lang/ger.js'
// import { ita } from './lang/ita.js'
// import { spa } from './lang/spa.js'

import { cargarDatos } from './loadData.js'

const datos = await cargarDatos()
console.log(datos)

export const i18n = {}

export function fn() {
  datos.forEach((dato) => {
    i18n[dato.code] = {
      code: dato.code,
      data: dato.data,
    }
  })
}

// ---

fn()

// export { datos }

// export const i18n = {
//   eng,
//   fra,
//   ger,
//   ita,
//   spa,
// }
