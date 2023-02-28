const { getData, getImg } = require('./firebase-config');

const express = require('express');

const app = express.Router();


app.get('/',async(req,res)=>{
    let info = [];
    const querySnapshot = await getData();
    querySnapshot.forEach((doc) => {
        getImg(`menu-imgs/${doc.data().seccion}.webp`)
        .then((url)=>{
            info.push({id:doc.id, data:doc.data(), url:url});
            if (info.length === 2) {
                res.render("index",{info});
            }
        });
    });
});
module.exports = app;