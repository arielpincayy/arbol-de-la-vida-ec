const { getDataMenu } = require('./firebase-config');

const express = require('express');

const app = express.Router();


app.get('/menu/:id',async(req,res)=>{
  try {
    let arrData = [];
    const querySnapshot = await getDataMenu(req.params.id);
    querySnapshot.forEach((doc) => {
      arrData.push({id:doc.id, data:doc.data(), price:doc.data().valor[0].split('$')[1]});
    });
    setTimeout(function() {
      res.render("menu",{arrData});
    }, 1000);    
  } catch (error) {
    res.send(error);
  }
});


module.exports = app;