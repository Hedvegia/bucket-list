'use strict'

const { gql } = require('apollo-server')

const TypeDefs = gql`
  type Query {
    hello: String
  }
`
module.exports = TypeDefs
