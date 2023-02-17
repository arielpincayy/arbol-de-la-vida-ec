const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');

const Auth = require('./routes/Auth');
const Home = require('./routes/Home');
const Menu = require('./routes/Menu');
const About = require('./routes/About');
const ProtectRoute = require('./routes/ProtectRoute');
const Product = require('./routes/Product');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('src/public'));
app.use(morgan('dev'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use(Home);
app.use(Menu);
app.use(About);
app.use(ProtectRoute);
app.use(Product);
app.use(Auth);


app.listen(process.env.PORT||5000,(req,res)=>{
    console.log('Server on port 5000');
});