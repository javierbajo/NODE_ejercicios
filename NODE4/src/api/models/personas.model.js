const mongoose = require("mongoose");
// Obtengo el Schema de mongoose
const Schema = mongoose.Schema;


const personasSchema = new Schema({
    name: {type: String, require: true},
    lastname: {type: String, require: true},
    email: {type: String, require: false},
    phone: {type: Number, require: false},
    city: {type: String, require: false}
},
{
    collection: 'personas',
}
);

// Crear el modelo de la colección en el esquema definido
const Persona = mongoose.model('persona', personasSchema);
module.exports = Persona;