'use strict'

const { gql } = require('apollo-server')

const TypeDefs = gql`
  type List = {
    id: String
    title: String
    where: String
    when: Data
    to: Date
    notes: String
  }

  type ListInput = {
    title: String
    where: String
    when: Date
    to: Date
    notes: String
  }

  type Query {
    hello: String,
    getItems: [List]
    getOneItem(id: String): List
  }

  type Delete {
    ok
  }

  type Mutation {
    createOne(id: String, input: ListInput): List
    deleteOne(id: String, input: ListInput): Delete
    updateOne(id: String, input: ListInput): List
  }
`
module.exports = TypeDefs
