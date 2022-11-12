const [hamburger, pizza, meat, desert, drink] = document.querySelectorAll('.menu ul li');
const boton = document.querySelectorAll('.card button');

boton.forEach(e=>{
    e.addEventListener('click',({target})=>{
        window.location.href='/product/'+target.dataset.id;
    });
});

hamburger.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Hamburguesas';
});
pizza.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Pizzas';
});
meat.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Meats';
});
desert.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Deserts';
});
drink.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Drinks';
});
