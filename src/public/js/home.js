const boton = document.querySelectorAll('.card button');

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