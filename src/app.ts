import { configDotenv } from 'dotenv'
import express from 'express'

configDotenv()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! ')
})

app.listen(Number(process.env.PORT), () => {
  console.log(`RPG API is listening at http://localhost:${process.env.PORT}`)
}
)
