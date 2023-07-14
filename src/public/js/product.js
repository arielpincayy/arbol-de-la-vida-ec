const boton = document.querySelector('.cart');
const cant = document.getElementById('cant');
const extra = document.querySelectorAll('.extra-p');
const button_price = document.querySelectorAll('.button-price');
const extraSPH_p = document.querySelectorAll('.extraSPH-p')

let cartId = [];
let extraArr = ["-0"];
let nameType = ['-0'];

window.addEventListener('DOMContentLoaded',()=>{
    const idProduct = localStorage.getItem('idProduct');
    JSON.parse(idProduct).forEach(e => {
        cartId.push(e);
    });
    getPricesButtons();
});

const selectType=((target, e)=>{
    let buttonPriceNum = target.dataset.name_price.split('$');
    nameType.push(buttonPriceNum[0].split(':')[0]);
    e.classList.toggle('button_price_toggle');
    e.style.backgroundColor='red';
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

extraSPH_p.forEach((e,i)=>{
    if(i == extraSPH_p.length-1){
        extraArr.push(';Papas fritas-0');
        extraSPH_p[0].style.backgroundColor='red';
    };
    e.addEventListener('click',({target})=>{
        extraArr.length=0;
        extraSPH_p.forEach(o=>o.style.backgroundColor='rgb(0, 140, 255)');
        extraArr.push(';'+target.dataset.name);
        e.classList.toggle('button_price_toggle');
        e.style.backgroundColor='red';
    });
});

function getPricesButtons(){
    let buttonPrice = [button_price[0].getAttribute('data-name_price')];
    let buttonPriceNum = buttonPrice[buttonPrice.length - 1].split('$');
    boton.setAttribute("data-price", buttonPriceNum[1]);
    button_price.forEach(e=>{
        e.addEventListener('click',()=>{
            buttonPrice.push(e.getAttribute('data-name_price'));
            let buttonPriceNum = buttonPrice[buttonPrice.length - 1].split('$');
            boton.setAttribute("data-price", buttonPriceNum[1]);
        });
    });
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
    if(+(target.dataset.price)>0){
        let priceFood = +(target.dataset.price);
        const priceTot= sumOrg()+ priceFood;
        const extras = extraArr.join(';');
        if (Math.floor(cant.value) > 0) {
            for (let i = 0; i < cant.value; i++) {
                cartId.push(target.dataset.id+' '+nameType[nameType.length-1]+extras+'&&'+priceTot);
                if (target.dataset.id != undefined) {
                    localStorage.setItem('idProduct', JSON.stringify(cartId));
                    confetti();
                    exitoPedido();
                }else{
                    errorPedido();
                }
            }
        }else{
            alert('No puedes ingresar valores menores a 0. Es decir Cantidad={x∈Z/x>0}')
        }
    }else{
        errorPedido();
    }
});
