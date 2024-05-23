const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { clients, client } = require('./queries/clientQueries');
const { addClient, deleteClient,updateClient } = require('./mutations/clientMutations');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients,
        client,
       
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addClient,
        deleteClient,
        updateClient
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
