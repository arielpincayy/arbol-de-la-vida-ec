const cartList = document.getElementById('cart-list');
const buttonPedido = document.getElementById('pedido-button');
const pop_up = document.querySelector('.pop-up');

window.addEventListener('DOMContentLoaded',()=>{
    cartListShow();
    saveCookie();
});

function cartListShow(){
    cartList.innerHTML=``;
    const idProduct = localStorage.getItem('idProduct');
    let sum = 0;
    JSON.parse(idProduct).forEach(e => {
        let i = e.split('&&');
        //DESCUENTO TEMPORAL, DEBE SER CAMBIADO LUEGO UWU
        sum += +i[1] - (i[1])*0.1;
        cartList.innerHTML+=`
        <li>
            <div>${i[0].toUpperCase()} $${i[1]} Descuento de 10%: $${i[1] - (i[1])*0.1}</div>
            <div>
                <i data-name='${e}' class="fa-solid fa-trash delete"></i>
            </div>
        </li>
        `
        document.querySelectorAll('.delete').forEach(e=>{
            e.addEventListener('click',({target})=>{
                let nameProduct = JSON.parse(localStorage.getItem('idProduct'));
                console.log(target.dataset.name);
                let found = nameProduct.findIndex(p=>p===target.dataset.name);
                let newArray = nameProduct.filter((product,i)=>i!==found);
                localStorage.clear();
                localStorage.setItem('idProduct', JSON.stringify(newArray));
                window.location.reload();
            });
        });
    });
    document.querySelector('.suma').innerText=`$${sum}`;
}

buttonPedido.addEventListener('click',()=>{
    pop_up.style.transform='translateY(-50vh)';
    let arrPedido = [];
    const idProduct = JSON.parse(localStorage.getItem('idProduct'));
    idProduct.forEach(e=>{
        document.querySelector('.pop-up ul').innerHTML+=`<li>${e.split('&&')[0]}</li>`;
        arrPedido.push(e.split("&&")[0]);
    });
    document.querySelector('.efectivo').addEventListener('click',()=>{
        localStorage.clear();
        window.location.href=`https://api.whatsapp.com/send?phone=982028213&text=Hola,%20deseo%20comprar%20"${arrPedido.toString()}".%20Pagaré%20en%20efectivo`
    });
    document.querySelector('.transfe').addEventListener('click',()=>{
        localStorage.clear();
        window.location.href=`https://api.whatsapp.com/send?phone=982028213&text=Hola,%20deseo%20comprar%20"${arrPedido.toString()}".%20Pagaré%20por%20transferencia`
    });
    document.querySelector('.cancelar').addEventListener('click',()=>{
        pop_up.style.transform='translateY(-200vh)';
    });
});


