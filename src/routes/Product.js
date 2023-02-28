const { getProduct, getImg } = require('./firebase-config');

const express = require('express');

const app = express.Router();

var extra=false;
app.get("/product/:id", async(req,res)=>{
    const id = req.params.id;
    const querySnapshot = await getProduct(id);
    const datos = querySnapshot.data();
    getImg(`menu-imgs/${datos.seccion}.webp`)
    .then((url)=>{
        if (datos.seccion === 'pizza') {
            var extra=true;
        }
        res.render("product", {datos, url, extra});   
    });

});

module.exports = app;
