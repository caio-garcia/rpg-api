import { configDotenv } from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import userRoute from './controllers/user.controller'

configDotenv()

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to RPG API')
})

app.use('/user', userRoute)

app.listen(Number(process.env.PORT), () => {
  console.log(`RPG API is listening at http://localhost:${process.env.PORT}`)
})
