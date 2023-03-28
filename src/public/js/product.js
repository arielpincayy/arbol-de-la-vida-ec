const boton = document.querySelector('.cart');
const cant = document.getElementById('cant');
const extra = document.querySelectorAll('.extra-p');
const button_price = document.querySelectorAll('.button-price');

let cartId = [];
let extraArr = [" -0"];
let nameType = [''];

window.addEventListener('DOMContentLoaded',()=>{
    const idProduct = localStorage.getItem('idProduct');
    JSON.parse(idProduct).forEach(e => {
        cartId.push(e);
    });
    getPricesButtons();
});

const selectType=((target, e)=>{
    let buttonPriceNum = target.dataset.name_price.split('$');
    nameType.push(buttonPriceNum[0].slice(0, -2));
    e.classList.toggle('button_price_toggle');
    e.style.backgroundColor='red';
    console.log(buttonPriceNum);
});

function takeOutColor(){
    button_price.forEach(e=>{    
        e.style.backgroundColor='blue';
    });
}

button_price.forEach((e,i)=>{
    e.addEventListener('click',async({target})=>{
        await takeOutColor();
        selectType(target, e, i);
    });
});




function getPricesButtons(){
    const buttonPrice = button_price[0].getAttribute('data-name_price');
    let buttonPriceNum = buttonPrice.split('$');
    boton.setAttribute("data-price", buttonPriceNum[1]);
    boton.setAttribute("data-name_type", buttonPriceNum[0].slice(0, -2));
}



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
    if (Math.floor(cant.value) > 0) {
        for (let i = 0; i < cant.value; i++) {
            cartId.push(target.dataset.id+' '+nameType[nameType.length-1]+'-'+extras+'&&'+priceTot);
            localStorage.setItem('idProduct', JSON.stringify(cartId));
        }
        alert('Producto agregado al carrito');
    }else{
        alert('No puedes ingresar valores menores a 0. Es decir Cantidad={x∈R/x>0}')
    }
});
