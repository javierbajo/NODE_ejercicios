const mongoose = require('mongoose');

const user = "javierbajo";
const password = "PequeñaPelusa123";
const db = "alumnos";

const uri = `mongodb+srv://${user}:${password}@cluster0.ue3lcai.mongodb.net/${db}?retryWrites=true&w=majority`;


mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a mongodb'))
    .catch((e) => console.log('error de conexión', e));

