import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fastify from 'fastify'
import { resolve } from 'node:path'
import { authRoutes } from './routes.ts/auth'
import { memoriesRoutes } from './routes.ts/memories'
import { uploadRoutes } from './routes.ts/upload'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../upload'),
  prefix: '/upload',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(uploadRoutes)
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
