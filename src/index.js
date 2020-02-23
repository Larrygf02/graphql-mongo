import express from 'express'
import grahqlHTTP from 'express-graphql'
import schema from './schema'

import { connect } from './database'

const app = express()
connect()

app.use('/graphql', grahqlHTTP({
    graphiql: true,
    schema: schema,

}))

app.listen(3000, () => console.log('Serve on port 3000'))
