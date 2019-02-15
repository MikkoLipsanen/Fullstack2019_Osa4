const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const blogsRouter = require('./controllers/blogs')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

logger.info('connecting to', config.mongoUrl, 'port', config.port)

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

app.use('/api/blogs', blogsRouter)

module.exports = app