import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes.ts/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // Para colocar emogi a tecla no win é win + .
    console.log('🚀 HTTP server runnig on http://localhost:3333')
  })
