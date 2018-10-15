'use strict'

const connection = require('../config')
const List = require('../Schemas/list')

const get = () => connection()
  .then(() => List.find())
  .then((response) => response)
  .catch((err) => err)

const update = (args) => connection()
  .then(() => List.findByIdAndUpdate(args.id, { $set: args.input }))
  .then((response) => response)
  .catch((err) => err)

const getOne = (id) => connection()
  .then(() => List.findById(id))
  .then((response) => response)
  .catch((err) => err)

const deleteOne = (id) => connection()
  .then(() => List.findByIdAndDelete(id))
  .then((response) => response)
  .catch((err) => err)

const create = (args) => connection()
  .then(() => {
    const list = new List(args)
    return list.save()
  })
  .then((response) => response)
  .catch((err) => err)

module.exports = {
  get,
  update,
  getOne,
  deleteOne,
  create
}
