// // Definir una función asincrónica para cargar los archivos JSON

const langCodes = ['eng', 'fra', 'ger', 'ita', 'spa']

export async function cargarDatos() {
  try {
    // Utilizar map para obtener un array de promesas
    const promesas = langCodes.map(async (code) => {
      const response = await fetch(`./lang/${code}.json`)
      const data = await response.json()
      return data
    })

    // Esperar a que todas las promesas se resuelvan
    const datos = await Promise.all(promesas)
    return datos
  } catch (err) {
    console.warn('Error al cargar datos:', err)
  }
}
