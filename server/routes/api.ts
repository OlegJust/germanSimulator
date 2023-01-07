import { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const verbRouter = Router()
const apiRouter = Router()

verbRouter.get('/verb', async (req: Request, res: Response) => {
  const posts = await prisma.verb.findMany()
  res.json(posts)
})
verbRouter.post('/verb', async (req: Request, res: Response) => {
  const { level, content, translation, exception, ich, du, erEsSie, wir, ihr, sie } = req.body
  const post = await prisma.verb.create({
    data: {
      level,
      content,
      translation,
      exception,
      ich,
      du,
      erEsSie,
      wir,
      ihr,
      sie
    }
  })
  res.json(post)
})

apiRouter.use(verbRouter)

export default apiRouter
