const express = require('express');
const jwt = require('jsonwebtoken');

const app = express.Router();

const verifyToken = (req,res,next) =>{
    const accesToken = req.query.accesToken;
    const route = req.query.route;
    if(!accesToken) {
        res.redirect('/signIn?route='+route);
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


app.get("/reservation", verifyToken, async (req, res) => {
    res.render('reservations');
});
  
app.get('/cart',verifyToken,(req,res)=>{
    res.render('cart');
});
  
app.post('/reservation',async(req,res)=>{
    const { dateReser, time, infoAdd, numeroPersonas } = req.body;
    res.redirect(`https://api.whatsapp.com/send?phone=982028213&text=Hola%20deseo%20hacer%20una%20reservacion%20de%20${numeroPersonas}%20el%20${dateReser}%20a%20las%20${time}%20${infoAdd}`);
});

  
module.exports = app;