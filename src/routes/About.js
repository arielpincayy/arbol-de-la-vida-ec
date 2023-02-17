const express = require('express');

const app = express.Router();


app.get('/about',(req,res)=>{
    res.render('about');
});


module.exports = app;