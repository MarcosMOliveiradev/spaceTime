import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Ola mundo'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // Para colocar emogi a tecla no win é win + .
    console.log('🚀 HTTP server runnig on http://localhost:3333')
  })
