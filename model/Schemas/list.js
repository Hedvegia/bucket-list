'use strict'

const mongoose = require('mongoose')

const { Schema } = mongoose

const ListSchema = new Schema({
  title: String,
  notes: String,
  state: String
})

module.exports = mongoose.model('List', ListSchema)
