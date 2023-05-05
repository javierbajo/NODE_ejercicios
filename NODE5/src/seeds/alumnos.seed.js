
mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Alumno = require("../api/models/alumno.model.js");


const arrayAlumnos = [
    {
        "nombre": "Aberto",
        "apellido": "Manchego",
        "edad": 42,
        "aprobado": true,
        "notas": [7, 8, 5, 6]
    },{
        "nombre": "Carlos",
        "apellido": "De Santos",
        "edad": 42,
        "aprobado": false,
        "notas": [3, 2, 4, 1]
    },{
        "nombre": "Virginia",
        "apellido": "Lorenzo",
        "edad": 44,
        "aprobado": true,
        "notas": [6, 5, 5, 7]
    },{
        "nombre": "Pedro",
        "apellido": "Cuadrado",
        "edad": 41,
        "aprobado": true,
        "notas": [6, 6, 5, 8]
    }
];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allAlumnos = await Alumno.find();
    if(allAlumnos.length > 0){
        await Alumno.collection.drop();
        console.log("alumnos borrados");
    }
})
.catch((error) => console.log("Error borrando alumnos"))
.then(async() => {
    const alumnosMap = arrayAlumnos.map(alumno => new Alumno(alumno));
    await Alumno.insertMany(alumnosMap);
    console.log("Alumnos insertados");
})
.catch((error) => console.log(`Error insertando alumnos: $:{error}`))
.finally(() => mongoose.disconnect());



