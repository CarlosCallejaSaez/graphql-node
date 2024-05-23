require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const DB = require("./config/db");
const PORT = process.env.PORT ;

const app = express();


DB();

app.use(cors());

app.use('/carlos-graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
