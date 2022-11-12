const { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("./firebase-config");

const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express.Router();


const verifyToken = (req,res,next) =>{
    const accesToken = req.query.accesToken;
    if(!accesToken) {
        res.redirect('/signUp');
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


app.get('/signUp',(req,res)=>{
    res.render('signUp');
});

app.get('/signIn',(req,res)=>{
    res.render('signIn');
});

app.get('/dashboard',verifyToken,(req,res)=>{
    const email = jwt.decode(req.query.accesToken);
    res.send(email);
});

app.post('/signUp',(req,res)=>{
    const {email, password} = req.body;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
          const accesToken = generateAccessToken(email);
          res.redirect('/cart?accesToken='+accesToken);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
});

app.post('/signIn',(req,res)=>{
    const {email, password} = req.body;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const accesToken = generateAccessToken(email);
          res.redirect('/cart?accesToken='+accesToken);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
});

function generateAccessToken(user){
    return jwt.sign(user, process.env.SECRETKEY);
}




module.exports = app;