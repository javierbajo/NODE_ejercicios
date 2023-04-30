const fs = require("fs");

const nombre = "mi culo moreno";

fs.writeFile("informacion.txt", nombre, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("se ha escrito el archivo");
    }
});

const names = ["mi", "culo", "moreno", "array"];
fs.writeFile("informacion2.txt", JSON.stringify(names), (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("se ha escrito el array en archivo");
    }
});

fs.readFile("informacion2.txt", (err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(JSON.parse(data));
    }
    });

fs.readFile("informacion.txt", 'utf-8', (err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });