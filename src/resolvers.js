import { tasks } from './sample'
import User from './models/User'
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
        },
        async Users() {
            const users = await User.find()
            return users
        }
    },
    Mutation: {
        createTask( _, { input }) {
            input._id = tasks.length
            tasks.push(input)
            return input;
        },
        async createUser( _, { input }) {
            const newUser = new User(input)
            console.log(newUser);
            await newUser.save()
            return newUser;
        }
    }
}