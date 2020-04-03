const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
// To parse incoming json data. Outgoing data is automatically parsed by res.send()
app.use(express.json())

// routers for various resources
app.use(userRouter)
app.use(taskRouter)

module.exports = app