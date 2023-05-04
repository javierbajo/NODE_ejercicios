const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const routerAlumno = require('./src/api/routes/alumno.routes.js');
const routerClase = require('./src/api/routes/clase.routes.js');

const app = express();
const {connect} = require('./src/utils/db.js');
connect();

app.use(express.json());
app.use('/alumnos', routerAlumno);
app.use('/clase', routerClase);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
