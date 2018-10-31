'use strict'

const connection = require('../config')
const List = require('../Schemas/list')

const get = () => connection()
  .then(() => List.find())
  .then((response) => {
    console.log(response)
    return response
  })
  .catch((err) => err)

const getTodos = () => connection()
  .then(() => List.find({state: 'todo'}))
  .then((response) => {
    console.log(response)
    return response
  })
  .catch((err) => err)

const getPendings = () => connection()
  .then(() => List.find({state: 'pending'}))
  .then((response) => {
    console.log(response)
    return response
  })
  .catch((err) => err)

const getCompleteds = () => connection()
  .then(() => List.find({state: 'completed'}))
  .then((response) => {
    console.log(response)
    return response
  })
  .catch((err) => err)

const update = (args) => connection()
  .then(() => List.findByIdAndUpdate(args.id, { $set: args.input }))
  .then((response) => response)
  .catch((err) => err)

const getOne = ({ id }) => {
  console.log(id)
  return connection()
  .then(() => List.findById(id))
  .then((response) => response)
  .catch((err) => err)
}

const deleteOne = ({ id }) => connection()
  .then(() => List.findByIdAndDelete(id))
  .then((response) => response)
  .catch((err) => err)

const create = (args) => connection()
  .then(() => {
    const list = new List(args.input)
    return list.save()
  })
  .then((response) => response)
  .catch((err) => err)

module.exports = {
  get,
  update,
  getOne,
  deleteOne,
  create,
  getTodos,
  getPendings,
  getCompleteds
}
