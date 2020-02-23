import express from 'express'
import grahqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.use('/graphql', grahqlHTTP({
    graphiql: true,
    schema: schema
}))

app.listen(3000, () => console.log('Serve on port 3000'))
