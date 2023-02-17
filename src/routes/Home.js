const { getData, getImg } = require('./firebase-config');

const express = require('express');

const app = express.Router();


app.get('/',async(req,res)=>{
    let arrData = [[],[],[]];
    const querySnapshot = await getData();
    querySnapshot.forEach((doc) => {
        arrData[0].push({id:doc.id, data:doc.data()});
        getImg(`menu-imgs/${doc.data().nameImg}`)
        .then((url)=>{
            arrData[2].push({id:doc.id, data:doc.data(), url:url});
            arrData[1].push(url);
            if (arrData[1].length === arrData[0].length) {
                let info = arrData[2];
                res.render("index",{info});
            }
        });
    });
});


module.exports = app;