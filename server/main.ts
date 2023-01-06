import express, { Request, Response } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.use(express.static(path.join(__dirname, '..', 'build')))
app.use(express.static('public'))

app.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(9000)

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
