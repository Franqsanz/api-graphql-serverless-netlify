const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const serverless = require('serverless-http');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql');

const app = express();

app.use(express.json());

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'ME',
        fields: () => ({
            name: {
                type: GraphQLString,
                resolve: () => 'Franco Andrés'
            },
            lastname: {
                type: GraphQLString,
                resolve: () => 'Sánchez'
            },
            age: {
                type: GraphQLInt,
                resolve: () => 23
            },
            country: {
                type: GraphQLString,
                resolve: () => 'Argentina'
            },
            province: {
                type: GraphQLString,
                resolve: () => 'Córdoba'
            },
        }),
    }),
});

app.use('/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

module.exports.handler = serverless(app);