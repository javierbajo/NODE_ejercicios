const express = require("express");
const routerUsers= express.Router();

const user = {
    email: "javibajo@gorgomail.com",
    password: '123456'
};
const users = [user];

const checkUsuario = (nuevoUsuario)=>{
    if(users.filter(elemento => elemento.email == nuevoUsuario.email).length > 0) return true;
    else return false;
}



// registrar --> permita añadir un nuevo usuario al array de users
routerUsers.post('/registrar', (req,res)=>{
    const nuevoUsuario = req.body; 
    // comprobar que no existe para no añadirlo varias veces
    const usuarioYaExiste = checkUsuario(nuevoUsuario);
    if (usuarioYaExiste){
        res.send("Este usuario ya existe");
    }else{
    users.push(nuevoUsuario);
    console.log(users);
    res.send(`email:  ${nuevoUsuario.email}   registrado con éxito`);
    }
});
// --------------------------
routerUsers.post('/eliminar', (req,res)=>{
    
    const usuarioEliminar = req.body; 
    const indiceEliminar = users.map(usuario => usuario.email).indexOf(usuarioEliminar.email);
    console.log(users);

    if(indiceEliminar === -1) {
        res.send("El usuario introducido no existe")
    }
    else if(users[indiceEliminar].password != usuarioEliminar.password){
        res.send("El password no es correcto. El usuario no se puede eliminar");
        console.log(users[indiceEliminar].password);
        console.log(usuarioEliminar.password);
    }
    else{
        users.splice(indiceEliminar,1);
        res.send(`${usuarioEliminar.email}   eliminado`)
    }
});
// login --> busque si el usuario y contraseña son correctos y devuelva un mensaje si ha iniciado sesión o no
routerUsers.post('/login', (req,res)=>{
    const usuarioLogear = req.body;
    console.log(req.body);
   indiceLogear = users.map(usuario => usuario.email).indexOf(usuarioLogear.email);
   console.log(indiceLogear)
    if((indiceLogear == -1) || (users[indiceLogear].password != usuarioLogear.password)){
        res.send("Usuario o contraseña incorrectos")
    }
    else{
        res.send(`${usuarioLogear.email} ha iniciado la sesión con éxito`);
    }

});

module.exports = routerUsers;

 