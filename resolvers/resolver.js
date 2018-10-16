'use strict'

const { get, getOne, create, deleteOne, update } = require('../model/listQueries/list')

const resolvers = {
  Query: {
    hello: () => 'Hello',
    getItems: () => get(),
    getOneItem: (root, args) => getOne(args)
  },
  Mutation: {
    createOne: (root, args) => create(args),
    deleteOne: (root, args) => deleteOne(args),
    updateOne: (root, args) => update(args)
  }
}

module.exports = resolvers
