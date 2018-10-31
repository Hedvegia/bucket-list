'use strict'

const { gql } = require('apollo-server')

const typeDefs = gql`
  type List {
    id: String
    title: String
    notes: String
    state: String
  }

  input ListInput {
    title: String
    notes: String
    state: String
  }

  type Query {
    hello: String,
    getItems: [List]
    getOneItem(id: String): List
    getTodos: [List]
    getPendings: [List]
    getCompleteds: [List]
  }

  type Mutation {
    createOne(input: ListInput): List
    deleteOne(id: String): List
    updateOne(id: String, input: ListInput): List
  }
`


module.exports = typeDefs
