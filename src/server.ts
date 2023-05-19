import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes.ts/memories'
import { authRoutes } from './routes.ts/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // Para colocar emogi a tecla no win é win + .
    console.log('🚀 HTTP server runnig on http://localhost:3333')
  })
