const boton = document.querySelectorAll('.card button');

boton.forEach(e=>{
    e.addEventListener('click',({target})=>{
        window.location.href='/product/'+target.dataset.id;
    });
});

if (localStorage.getItem('idProduct')===null) {
    let cart = [];
    localStorage.setItem('idProduct', JSON.stringify(cart));
}
