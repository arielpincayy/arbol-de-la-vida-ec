const boton = document.querySelector('.content button');
const cant = document.getElementById('cant');

let cartId = []

window.addEventListener('DOMContentLoaded',()=>{
    const idProduct = localStorage.getItem('idProduct');
    JSON.parse(idProduct).forEach(e => {
        cartId.push(e);
    });
});


boton.addEventListener('click',({target})=>{
    if (cant.value > 0) {
        for (let i = 0; i < cant.value; i++) {
            cartId.push(target.dataset.id);
            localStorage.setItem('idProduct', JSON.stringify(cartId));
        }
        alert('Producto agregado al carrito');
    }else{
        alert('No puedes ingresar valores menores a 0. Es decir Cantidad={x∈R/x>0}')
    }
});
