require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
  }

  database () {
    mongoose.connect(process.env.DB_URL, {useCreateIndex : true, useNewUrlParser: true, useFindAndModify: false})

  }

  middlewares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
