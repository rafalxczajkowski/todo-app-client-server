import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { connect } from 'mongoose'
import router from './routes/index.js'
import 'dotenv/config'
// import path from 'path'

const PORT = process.env.PORT || 3000
// const __dirname = path.resolve()

connect(process.env.MONGO_URI)

const app = express()

app.use(cors())
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'))
}
app.use(express.json())
app.use('/api', router)

app.use(express.static('./todo-app-client/dist'))

// if (process.env.NODE_ENV === 'production')
// app.use(express.static(path.join(__dirname, '/todo-app-client/dist')))
// app.get('*', (req, res) => {
//   // console.log(
//   //   '!!!!! ' +
//   //     path.resolve(__dirname, 'todo-app-client', 'dist', 'index.html')
//   // )

//   res.sendFile(path.resolve(__dirname, 'todo-app-client', 'dist', 'index.html'))
// })

// app.use(express.static('todo-app-client/dist'))
// app.get('*', (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, 'todo-app-client', 'dist', 'index.html')
//   )
// })

console.log('---MONGO_URI = ' + process.env.MONGO_URI)
console.log('---PORT = ' + PORT)
// console.log(
//   '---path.resolve = ' +
//     path.resolve(__dirname, 'todo-app-client', 'dist', 'index.html')
// )
// console.log('---path.join = ' + path.join(__dirname, '/todo-app-client/dist'))

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
