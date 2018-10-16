'use strict'

const { gql } = require('apollo-server')

const typeDefs = gql`
  type List {
    id: String
    title: String
    where: String
    when: String
    to: String
    notes: String
  }

  input ListInput {
    title: String
    where: String
    when: String
    to: String
    notes: String
  }

  type Delete {
    ok: String
  }

  type Query {
    hello: String,
    getItems: [List]
    getOneItem(id: String): List
  }

  type Mutation {
    createOne(input: ListInput): List
    deleteOne(id: String, input: ListInput): Delete
    updateOne(id: String, input: ListInput): List
  }
`


module.exports = typeDefs
