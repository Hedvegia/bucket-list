'use strict'

const mongoose = require('mongoose')
const logger = require('../logger')

mongoose.Promise = global.Promise

let dbConnection

const connectToDB = () => {
  if (dbConnection) {
    return Promise.resolve(dbConnection)
  }

  return mongoose
    .connect(process.env.MONGO_URI)
    .then((db) => {
      logger.info('connected at mongodb server at 27017')

      dbConnection = db

      return db
    })
    .catch((err) => logger.error('connection refused ', err))
}

module.exports = connectToDB
