const express = require('express');
require("./conex");
require("dotenv").config();
const server = express();
const PORT = process.env.PORT;
const cors = require('cors');
server.use(cors());
server.use(express.json());
const routeUsers = require("./routes/users-route.js");
const routeAdmin = require("./routes/admin-routes.js");

server.use('/admin', routeAdmin);
server.use('/users', routeUsers);



server.use('/info', (req,res)=> {
  const persona = {
    nombre: "Petra",
    apellido: "Ramirez",
  };
  res.send(persona);
});




server.listen(PORT, ()=> console.log(`Conectado a http://localhost:${PORT}`));