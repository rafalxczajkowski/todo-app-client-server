import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { connect } from 'mongoose'
import router from './routes/index.js'
import 'dotenv/config'

const PORT = 3000

connect(process.env.MONGO_URI)

const app = express()

app.use(cors())
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'))
}
app.use(express.json())
app.use('/api', router)

app.use(express.static('./todo-app-client/dist'))

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
