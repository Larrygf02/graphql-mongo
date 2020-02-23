import express from 'express'
import grahqlHTTP from 'express-graphql'
const app = express()

const schema = {}
app.use('/graphql', grahqlHTTP({
    graphiql: true,
    schema: {}
}))

app.listen(3000, () => console.log('Serve on port 3000'))
