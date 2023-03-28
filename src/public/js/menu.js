const [hamburger, pizza, sanduche, compartir, internacional, desayuno, ensalada, helado, waffle ,pita, bebida, bebidaAlcohólica, bebidaCaliente ] = document.querySelectorAll('.menu ul li');
const boton = document.querySelectorAll('.card button');
const seccion_name = document.querySelector('.seccion_name');

boton.forEach(e=>{
    e.addEventListener('click',({target})=>{
        window.location.href='/product/'+target.dataset.id;
    });
});

let seccion_route = (window.location.pathname).split('/')[2];
seccion_name.innerText=seccion_route;

hamburger.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Hamburguesa';
});
pizza.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Pizza';
});
compartir.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Compartir';
});
sanduche.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Sanduche';
});
bebida.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Bebida';
});
bebidaAlcohólica.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Cerveza-Vino-Cocteles';
});
bebidaCaliente.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Bebidas_calientes';
});
pita.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Pita';
});
helado.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Helado';
});
waffle.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Waffle';
});
desayuno.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Desayuno';
});
internacional.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Internacional';
});
ensalada.addEventListener('click',(req,res)=>{
    window.location.href='/menu/Ensalada';
});




