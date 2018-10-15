'use strict'

const mongoose = require('mongoose')

const { Schema } = mongoose

const ListSchema = new Schema({
  title: String,
  where: String,
  when: Date,
  to: Date,
  notes: String,
})

module.exports = mongoose.model('List', listSchema)
