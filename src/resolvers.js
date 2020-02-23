import { tasks } from './sample'

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world con graphql'
        },
        greet(root, { name }) {
            return `Hello ${name}`
        },
        tasks: () => {
            return tasks
        }
    }
}