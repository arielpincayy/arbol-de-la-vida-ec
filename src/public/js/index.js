const [home, about, menu, reservation, cart] = document.querySelectorAll('.menu-white ul li');
const nav = document.querySelector('nav');
const bar = document.querySelector('.bar');

home.addEventListener('click',()=>{
    window.location.href='/';
});
about.addEventListener('click',()=>{
    window.location.href='/about';
});
menu.addEventListener('click',()=>{
    window.location.href='/menu/Hamburguesas';
});
reservation.addEventListener('click',()=>{
    window.location.href='/reservation'+existCookie();
});
cart.addEventListener('click',()=>{
    window.location.href='/cart'+existCookie();
});


bar.addEventListener('click',()=>{
    nav.classList.toggle('nav_toggle');
});

function getCookie(){
    const arrayToken = (document.cookie).split(';');
    const findToken = arrayToken.map((e)=>e.search('tokenId')!==-1);
    const index = findToken.indexOf(true);
    if (index === -1) {
        return null;
    }
    const cookieToken = arrayToken[index].split('=')[1];
    return cookieToken;
}

function existCookie(){
    if (getCookie() !== null) {
        return `?accesToken=${getCookie()}`;
    }
    return '';
}



function expiresTime(){
    var fecha = new Date().toString();
    var datePartials = fecha.split(' ');
    datePartials.length = datePartials.length - 2;
    if(parseInt(datePartials[2]) < 9){
      var date = datePartials.fill("0"+(parseInt(datePartials[2])+3).toString(),2,3).join(' ');
      return date;
    }else{
      var date = datePartials.fill((parseInt(datePartials[2])+3).toString(),2,3).join(' ');
      return date;
    }  
}

function saveCookie() {
    var cookie = ((window.location.search).split('='))[1];
    document.cookie=`tokenId=${cookie};expires=${expiresTime()}`;
}
