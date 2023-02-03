const Auth = require('./Auth');
const { getData, getImg, getDataMenu, week, onSnapshot, query, collection, db } = require('./firebase-config');

const express = require('express');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

const app = express.Router();


const verifyToken = (req,res,next) =>{
    const accesToken = req.query.accesToken;
    if(!accesToken) {
        res.redirect('/signIn');
    }else{
        jwt.verify(accesToken,process.env.SECRETKEY,(err,user)=>{
            if (err) {
                res.send('Access denied or incorrect, please do not fuck the life uwu');
            } else {
                next();
            }
        });
    }
}


app.get('/',async(req,res)=>{
    let datos = [];
    let urls = [];
    let info = [];
    const querySnapshot = await getData();
    querySnapshot.forEach((doc) => {
        datos.push({id:doc.id, data:doc.data()});
        getImg(`menu-imgs/${doc.data().nameImg}`)
        .then((url)=>{
            info.push({id:doc.id, data:doc.data(), url:url});
            urls.push(url);
            if (urls.length === datos.length) {
                res.render("index",{info});
            }
        });
    });
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/menu/:id',async(req,res)=>{
    let datos = [];
    let urls = [];
    let info = [];
    const querySnapshot = await getDataMenu(req.params.id);
    querySnapshot.forEach((doc) => {
        datos.push({id:doc.id, data:doc.data()});
        getImg(`menu-imgs/${doc.data().nameImg}`)
        .then((url)=>{
            info.push({id:doc.id, data:doc.data(), url:url});
            urls.push(url);
            if (urls.length === datos.length) {
                res.render("menu",{info});
            }
        });
    });
});

app.get('/cart',verifyToken,(req,res)=>{
    const email = jwt.decode(req.query.accesToken);
    console.log(email);
    res.render('cart');
});

app.get("/reservation", verifyToken, async (req, res) => {
  res.render('reservations');
});

app.post('/reservation',async(req,res)=>{
    const { dateReser, time, infoAdd, numeroPersonas } = req.body;
    res.redirect(`https://api.whatsapp.com/send?phone=982028213&text=Hola,%20deseo%20hacer%20una%20reservacion%20de%20${numeroPersonas}%20el%20${dateReser}%20a%20las%20${time}.%20${infoAdd}`);

});




module.exports = app;