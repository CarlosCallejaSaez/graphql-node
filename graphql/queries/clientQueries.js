const { GraphQLList, GraphQLID } = require('graphql');
const ClientType = require('../types/ClientType');
const Client = require('../../models/Client');

const clients = {
    type: new GraphQLList(ClientType),
    resolve: () => Client.find({}),
};

const client = {
    type: ClientType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Client.findById(args.id);
    }
};

module.exports = { clients, client };
