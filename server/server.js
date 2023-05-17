//constants and required packages
const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const { error } = require('console')
const port = process.env.PORT || 3001

const app = express()

// app usage functions
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/user-routes', require('./routes/api/user-routes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))


