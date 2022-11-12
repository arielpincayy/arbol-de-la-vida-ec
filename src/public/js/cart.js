const cartList = document.getElementById('cart-list');


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


