const { GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');
const ClientType = require('../types/ClientType');
const Client = require('../../models/Client');


const addClient = {
    type: ClientType,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
        const client = new Client({
            name: args.name,
            email: args.email,
            phone: args.phone,
        });

        return client.save();
    },
};


const deleteClient = {
    type: ClientType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
        return Client.findByIdAndDelete(args.id);
    },
};

const updateClient = {
    type: ClientType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    },
    async resolve(parent, args) {
        try {
            const client = await Client.findById(args.id);

            if (!client) {
                throw new Error('Cliente no encontrado');
            }

            client.name = args.name || client.name;
            client.email = args.email || client.email;
            client.phone = args.phone || client.phone;

            return client.save();
        } catch (err) {
            throw new Error('Error al actualizar el cliente');
        }
    },
};

module.exports = { addClient, deleteClient, updateClient };
