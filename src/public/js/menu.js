const [hamburger, pizza, sanduche, compartir, internacional, desayuno, ensalada, helado, waffle ,pita, bebida ] = document.querySelectorAll('.menu ul li');
const boton = document.querySelectorAll('.card button');

boton.forEach(e=>{
    e.addEventListener('click',({target})=>{
        window.location.href='/product/'+target.dataset.id;
    });
});

hamburger.addEventListener('click',(req,res)=>{
    window.location.href='/menu/hamburguesa';
});
pizza.addEventListener('click',(req,res)=>{
    window.location.href='/menu/pizza';
});
compartir.addEventListener('click',(req,res)=>{
    window.location.href='/menu/compartir';
});
sanduche.addEventListener('click',(req,res)=>{
    window.location.href='/menu/sanduche';
});
bebida.addEventListener('click',(req,res)=>{
    window.location.href='/menu/bebida';
});
pita.addEventListener('click',(req,res)=>{
    window.location.href='/menu/pita';
});
helado.addEventListener('click',(req,res)=>{
    window.location.href='/menu/helado';
});
waffle.addEventListener('click',(req,res)=>{
    window.location.href='/menu/waffle';
});
desayuno.addEventListener('click',(req,res)=>{
    window.location.href='/menu/desayuno';
});
internacional.addEventListener('click',(req,res)=>{
    window.location.href='/menu/internacional';
});
ensalada.addEventListener('click',(req,res)=>{
    window.location.href='/menu/ensalada';
});




