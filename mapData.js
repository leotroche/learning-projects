import example from './mocks/example.json'

export const mappedData = example.map((data) => {
  return {
    id: data.id,
    titulo: data.title,
    cuerpo: data.body,
    userId: data['userId'],
  }
})
