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
                function compararPorNombre(a, b) {
                    const nombreA = a.data.nombre.toUpperCase();
                    const nombreB = b.data.nombre.toUpperCase();
                  
                    if (nombreA < nombreB) {
                      return -1;
                    }
                    if (nombreA > nombreB) {
                      return 1;
                    }
                    return 0;
                  }
                  
                  const menuOrdenado = info.sort(compararPorNombre);
                  
                res.render("menu",{menuOrdenado});
            }
        });
    });
});


module.exports = app;