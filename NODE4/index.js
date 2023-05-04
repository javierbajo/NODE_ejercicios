const express = require('express');
require("dotenv").config();
const cors = require('cors');
const {connect} = require('./src/utils/database.js');
connect(); // conexión con la base de datos
const app = express();
app.use(cors());
app.use(express.json());
 
const routerPersona = require('./src/api/routes/personas.routes.js');

app.use('/persona', routerPersona);






const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Url del servidor: http://localhost:${PORT}`));