import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  // Retonar todos os memoria do banco de dados
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })
    return memories
  })
  // Retorna uma memoria especifica apartir do id
  app.get('/memories/:id', async () => {})

  // Rota para criar uma memoria
  app.post('/memories', async () => {})

  // Atualizar uma memoria
  app.put('/memories/:id', async () => {})

  // Deleta uma memoria
  app.delete('/memories/:id', async () => {})
}
