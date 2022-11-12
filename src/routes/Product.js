const Auth = require('./Auth');
const { getProduct, getImg } = require('./firebase-config');

const express = require('express');

const app = express.Router();

app.get("/product/:id", async(req,res)=>{
    const id = req.params.id;
    const querySnapshot = await getProduct(id);
    const datos = querySnapshot.data();
    getImg(`menu-imgs/${datos.nameImg}`)
    .then((url)=>{
        res.render("product", {datos, url});
    });

});

module.exports = app;
