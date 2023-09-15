const { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("./firebase-config");

const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express.Router();


app.get('/signUp',(req,res)=>{
    const route = req.query.route||"";
    res.render('signUp',{err:"", route});
});

app.get('/signIn',(req,res)=>{
    const route = req.query.route||"";
    res.render('signIn',{err:"", route});
});


app.post('/signUp',(req,res)=>{
    var {email, password, route} = req.body;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
          const accesToken = generateAccessToken(email);
          if (typeof route !== 'string'){route=''}
          res.redirect('/'+route+'?accesToken='+accesToken);
    })
    .catch((error) => {
        if (error.message==="Firebase: Error (auth/email-already-in-use).") {
            let err = "Este correo ya fue registrado";
            res.render("signUp",{err, route:""});
          }
          if (error.message==="Firebase: Password should be at least 6 characters (auth/weak-password).") {
            let err = "La contraseña debe tener como mínimo 6 caractéres";
            res.render("signUp",{err, route:""}); 
          }  
    });
});

app.post('/signIn',(req,res)=>{
    var {email, password, route} = req.body;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const accesToken = generateAccessToken(email);
          if (typeof route !== 'string'){route=''}
          res.redirect("/"+route+'?accesToken='+accesToken);
          // ...
        })
        .catch((error) => {
            if (error.message==="Firebase: Error (auth/wrong-password)."||error.message==="Firebase: Error (auth/user-not-found).") {
                let err = "Ha escrito un correo o contraseña erróneo";
                res.render("signIn",{err,route:""});
              } 
        });
});

function generateAccessToken(user){
    return jwt.sign(user, process.env.SECRETKEY);
}




module.exports = app;