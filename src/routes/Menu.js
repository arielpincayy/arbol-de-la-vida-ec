const { getImg, getDataMenu } = require('./firebase-config');

const express = require('express');

const app = express.Router();


app.get('/menu/:id',async(req,res)=>{
    let arrData = [[],[],[]];
    const querySnapshot = await getDataMenu(req.params.id);
    querySnapshot.forEach((doc) => {
        arrData[0].push({id:doc.id, data:doc.data()});
        getImg(`menu-imgs/${doc.data().nameImg}`)
        .then((url)=>{
            arrData[2].push({id:doc.id, data:doc.data(), url:url});
            arrData[1].push(url);
            if (arrData[1].length === arrData[0].length) {
                let info = arrData[2];
                res.render("menu",{info});
            }
        });
    });
});


module.exports = app;