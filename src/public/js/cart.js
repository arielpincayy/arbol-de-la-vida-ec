const cartList = document.getElementById('cart-list');
const buttonPedido = document.getElementById('pedido-button');
const pop_up = document.querySelector('.pop-up');
const b_del = document.querySelectorAll('.b-del');

let arrPedido = [];
let bDel = [2];

window.addEventListener('DOMContentLoaded',()=>{
    cartListShow();
    saveCookie();
});

b_del.forEach(e=>{
    b_del[1].style.backgroundColor='red';
    e.addEventListener('click',({target})=>{
        b_del.forEach(o=>o.style.backgroundColor='rgb(57, 136, 255)');
        bDel.push(target.dataset.del);
        e.style.backgroundColor='red';
        cartListShow();
    });
});

let r = 0; 
function cartListShow(){
    r=r+1
    cartList.innerHTML=``;
    document.querySelector('.suma').innerText=``;
    const idProduct = localStorage.getItem('idProduct');
    let sum = +bDel[bDel.length-1];
    JSON.parse(idProduct).forEach(e => {
        let i = e.split('&&');
        sum += +i[1];
        const s = i[0].split(";").map(x=>x.split('-')).flat().map((x,index)=>(index%2==0)?x:'').filter(e => e != '');
        const sCopy = [...s];
        s.shift();
        const h = s.join(',');
        const nameProduct = sCopy[0]+'['+h+']';
        if(r==1)arrPedido.push(nameProduct);
        cartList.innerHTML+=`
        <li>
            <div>${nameProduct.toUpperCase()} $${i[1]}</div>
            <div>
                <i data-name='${e}' class="fa-solid fa-trash delete"></i>
            </div>
        </li>
        `
        document.querySelectorAll('.delete').forEach(e=>{
            e.addEventListener('click',({target})=>{
                let nameProduct = JSON.parse(localStorage.getItem('idProduct'));
                let found = nameProduct.findIndex(p=>p===target.dataset.name);
                let newArray = nameProduct.filter((product,i)=>i!==found);
                localStorage.clear();
                localStorage.setItem('idProduct', JSON.stringify(newArray));
                window.location.reload();
            });
        });
    });
    document.querySelector('.suma').innerText=`$${sum}`;
    document.querySelector('.desc-tot').innerText=`$${sum - (sum*0.1)}`;
}

buttonPedido.addEventListener('click',()=>{
    pop_up.style.transform='translateY(-70vh)';
    arrPedido.forEach(e=>{
        document.querySelector('.pop-up ul').innerHTML+=`<li>${e}</li>`;
    });
    document.querySelector('.transfe').addEventListener('click',()=>{
        localStorage.clear();
        confetti();
        localStorage.setItem('idProduct', "[]");
        const place=(bDel[bDel.length-1]==2)?'Yachay':'Urcuquí';
        setTimeout(()=>{
            window.location.href=`https://api.whatsapp.com/send?phone=986020627&text=Hola,%20deseo%20comprar%20"${arrPedido.toString()}".%20Pagaré%20por%20transferencia,%20y%20el%20deliveri%20será%20a%20${place}`
        },1000);
    });
    document.querySelector('.cancelar').addEventListener('click',()=>{
        pop_up.style.transform='translateY(-200vh)';
    });
});


