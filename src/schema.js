import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers';
const tyDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    }
`

export default makeExecutableSchema({
    typeDefs: tyDefs,
    resolvers: resolvers
})

