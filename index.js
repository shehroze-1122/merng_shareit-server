const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const { CONNECTION_URL } = require('./config')
const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers/index.js')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req })=> ({req})
})

const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
.then(()=>server.listen(PORT))
.then((res)=> console.log( `Server running at ${res.url}`))
.catch((err)=>console.log('Error', err.message))