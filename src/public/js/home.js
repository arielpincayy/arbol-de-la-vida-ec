const boton = document.querySelectorAll('.card button');
const [fb1,ig1,ws1] = document.querySelectorAll('.social-network-icons div');

fb1.addEventListener('click',()=>window.location.href="https://www.facebook.com/profile.php?id=100080858812728");
ig1.addEventListener('click',()=>window.location.href="https://www.instagram.com/arboldelavida.ec/");
ws1.addEventListener('click',()=>window.location.href="https://wa.link/cxaztv");

document.querySelector("header button").addEventListener('click',()=>{
    window.location.href='/menu/Hamburguesas';
});
boton.forEach(e=>{
    e.addEventListener('click',({target})=>{
        window.location.href='/product/'+target.dataset.id;
    });
});

if (localStorage.getItem('idProduct')===null) {
    let cart = [];
    localStorage.setItem('idProduct', JSON.stringify(cart));
}