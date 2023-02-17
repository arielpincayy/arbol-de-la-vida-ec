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
    JSON.parse(idProduct).forEach(e => {
        cartList.innerHTML+=`
        <li>
            <div>${e.toUpperCase()}</div>
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
}

buttonPedido.addEventListener('click',()=>{
    pop_up.classList.toggle('pop-up_toggle');
    const idProduct = JSON.parse(localStorage.getItem('idProduct'));
    idProduct.forEach(e=>{
        document.querySelector('.pop-up ul').innerHTML+=`<li>${e}</li>`;
    });
    document.querySelectorAll('.pay-box button').forEach(i=>{
        i.addEventListener('click',()=>{
            window.location.href=`https://api.whatsapp.com/send?phone=982028213&text=Hola,%20deseo%20comprar%20"${idProduct.toString()}"`
        });
    });
});


