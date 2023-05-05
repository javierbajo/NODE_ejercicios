const mongoose = require('mongoose');
require("./conex");
require("dotenv").config();

const uri = process.env.DB_URL;


mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a mongodb'))
    .catch((e) => console.log('error de conexión', e));

