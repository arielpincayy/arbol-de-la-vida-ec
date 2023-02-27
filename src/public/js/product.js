const boton = document.querySelector('.content button');
const cant = document.getElementById('cant');
const extra = document.querySelectorAll('.extra-p');

let cartId = [];
let extraArr = [];


window.addEventListener('DOMContentLoaded',()=>{
    const idProduct = localStorage.getItem('idProduct');
    JSON.parse(idProduct).forEach(e => {
        cartId.push(e);
    });
});

extra.forEach(i=>{
    i.addEventListener('click',({target})=>{
        const index = extraArr.indexOf(target.dataset.name);
        if (index > -1) {
            i.classList.toggle('extra_toggle');
            extraArr.splice(index, 1);
        }else{
            extraArr.push(target.dataset.name);
            i.classList.toggle('extra_toggle');
        }
    });
});

function sumOrg() {
    const extraMap=extraArr.map(e=>+e.split('-')[1]);
    let sum = extraMap.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      return sum;
}

boton.addEventListener('click',({target})=>{
    const priceTot= sumOrg()+ +(target.dataset.price);
    const extras = extraArr.join(',');
    if (cant.value > 0) {
        for (let i = 0; i < cant.value; i++) {
            cartId.push(target.dataset.id +'-'+extras+'&&'+priceTot);
            localStorage.setItem('idProduct', JSON.stringify(cartId));
        }
        alert('Producto agregado al carrito');
    }else{
        alert('No puedes ingresar valores menores a 0. Es decir Cantidad={x∈R/x>0}')
    }
});
