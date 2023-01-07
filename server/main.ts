import express, { Request, Response } from 'express'
import apiRouter from './routes/api.js'
import cors from 'cors'
const app = express()


// **** Set basic express settings **** //

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:000']
  })
)

app.use('/api', apiRouter)

app.get('/api', (req: Request, res: Response) => {
  res.json({ post: 2 })
})

app.listen(9000, () => {
  console.log('Server listening on port 9000')
})

//* Для деплоя с подержкой маршутов
// import express, { Request, Response } from 'express'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const app = express()

// app.use(express.static(path.join(__dirname, '..', 'build')))
// app.use(express.static('public'))

// app.use((req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
// })

// app.listen(9000)
