const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumnoSchema = new Schema(
    {
        nombre: {type: String, require: true},
        apellido: {type: String, required: false},
        edad: {type: Number, require: false},
        aprobado: {type: Boolean, required: false},
        notas: [{type: Number, required: false}]
    },{
        timestamps: true,
        collection: 'jroña'
    }
)

const Alumno = mongoose.model('alumno', alumnoSchema);

module.exports = Alumno;