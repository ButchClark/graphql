const express = require('express')
const graphqlHTTP = require('express-graphql')
const app=express()
const schema = require('./schema/schema')
const mongoose = require('mongoose')

// connect to mlab database
mongoose.connect("mongodb://butch:graphql@ds157641.mlab.com:57641/graphql-test")

mongoose.connection.once('open', ()=>{
	console.log('connected to mlab datagase')
})



app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}))

app.listen(4000, ()=> console.log('app listening on port 4000'))
