const express = require("express");
const routerAdmin = express.Router();

const products = ["zapatillas", "camiseta", "falda", "camisa"];


routerAdmin.get('/products', (req, res)=>{
    res.send(products);
});
// ------------------------------------------
routerAdmin.get('/products/:name', (req,res) => {
    const filteredProducts = products.filter((product) => {
        return product.includes(req.params.name.toLowerCase());
    })
    if(filteredProducts.length === 0){
        res.status(404);
        res.send("No hay productos con estas características")
    }else res.send(filteredProducts);
});
// ------------------------------------------
routerAdmin.get('/productFilter', (req,res) => {
    console.log(req.query)
    res.send(products[req.query.position]);
});
// ------------------------------------------
routerAdmin.post("/add", (req,res) =>{
    console.log(req.body);
    //res.send("hola holis!");
    products.push(req.body.name);
    console.log(req.body.name);
    res.json(products);
     
});

module.exports = routerAdmin;