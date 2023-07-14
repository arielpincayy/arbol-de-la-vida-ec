const { getData, getImg } = require('./firebase-config');

const express = require('express');

const app = express.Router();

app.get('/',async(req,res)=>{
    try {
        let info = [];
        const querySnapshot = await getData();
        querySnapshot.forEach((doc) => {
            getImg(`menu/${doc.data().nombre}.webp`)
            .then((url)=>{
                info.push({id:doc.id, data:doc.data(), url:url});
                if (info.length === 4) {
                    res.render("index",{info});
                }
            });
        });
    } catch (error) {
        res.send(error);
        console.log(error);
    }
});
module.exports = app;