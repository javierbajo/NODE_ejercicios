const express = require('express');
require("./conex");
require("dotenv").config();
const server = express();

// -----------------------------------
server.use("/picha/:bombon", (req,res)=>{
  const {bombon} = req.params;
  console.log(bombon);
  res.send(`hola picha! hola ${bombon}!`);
});
// -----------------------------------
server.use("/picha", (req,res)=>{
  res.send("hola picha!");  
});
// -----------------------------------
server.use("/movies/:id", (req,res)=>{
  const movies = [
  {
    id: "1",
    title: "Bitelchus",
    cover: "tuTía",
    duration: 300
  },
  {
    id:"2",
    title: "Regreso al futuro",
    cover: "CocheQueTeCagas",
    duration: 250
  },
  {
    id:"3",
    title: "Armagedon",
    cover: "Fuegos",
    duration: 350
  }
  ] 
  const {id} = req.params;
  const movieId = movies.find((movie)=>movie.id === id);
  res.json(movieId);
});
// -----------------------------------
server.use("/", (req,res)=>{
  res.send("hola majo!");
});




const PORT = process.env.PORT;
server.listen(PORT, ()=> console.log(`Conectado a puerto ${PORT}`));