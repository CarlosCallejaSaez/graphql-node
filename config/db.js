const mongoose = require('mongoose');

const DB = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database");
};

module.exports = DB;