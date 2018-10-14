'use strict'

const resolvers = {
  Query: {
    getHello: () => ({ hello: 'Hello World!' })
  }
}

module.exports = resolvers
