'use strict'

const { get, getOne, create, deleteOne, update, getTodos, getPendings, getCompleteds } = require('../model/listQueries/list')

const resolvers = {
  Query: {
    hello: () => 'Hello',
    getItems: () => get(),
    getOneItem: (root, { id: _id }) => getOne({ id: _id }),
    getTodos: () => getTodos(),
    getPendings: () => getPendings(),
    getCompleteds: () => getCompleteds()
  },
  Mutation: {
    createOne: (root, args) => create(args),
    deleteOne: (root, { id: _id }) => deleteOne({ id: _id }),
    updateOne: (root, args) => update(args)
  }
}

module.exports = resolvers
