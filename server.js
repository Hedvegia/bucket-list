'use strict';

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typeDefs/typeDefs')
const resolvers = require('./resolvers/resolver')
const logger = require('./logger')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  logger.info(`🚀  Server ready at ${url}`)
})

