const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


const URI = process.env.URI;

const connect = async () => {
    try{
        // Aquí nos conectamos con la BD
        const db = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const {name, host} = db.connection;
        console.log(`Base de datos: ${name} y host:${host}`);
    }catch(error){}
};

module.exports = {connect};