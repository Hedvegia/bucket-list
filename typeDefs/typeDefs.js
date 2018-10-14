'use strict'

const { gql } = require('apollo-server')

const TypeDefs = gql`
  type Hello {
    hello: String
  }

  type Query {
    getHello: Hello
  }
`
module.exports = TypeDefs
