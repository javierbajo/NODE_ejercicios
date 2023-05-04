const mongoose = require('mongoose');

const user = 'javierbajo';
const password = 'PequeñaPelusa123';
const db = 'clientes';

const URI = `mongodb+srv://${user}:${password}@cluster0.ue3lcai.mongodb.net/${db}?retryWrites=true&w=majority`;

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