const { getProduct, getImg } = require('./firebase-config');

const express = require('express');

const app = express.Router();

var extra=null;
app.get("/product/:id", async(req,res)=>{
    const id = req.params.id;
    const querySnapshot = await getProduct(id);
    const datos = querySnapshot.data();

    if (datos.seccion === 'Pizza') {
        var extra = 'Pizza';
    } 
    if(datos.seccion == 'Desayuno'){
        var extra = 'Desayuno';
    }

    getImg(`menu/${datos.nombre}.webp`)
    .then((urlImg)=>{
        var url = urlImg; 
        res.render("product", {datos, url, extra}); 
    })
    .catch(err=>{
        var url = null;
        res.render("product", {datos, url, extra}); 
    });

});

module.exports = app;
