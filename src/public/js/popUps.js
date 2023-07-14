function errorPedido(){
    const bg = document.querySelector(".bg");
    const errorPedir = document.querySelector(".error-pedir");
    bg.classList.toggle('bg_toggle');
    errorPedir.classList.toggle('error-pedir_toggle');
    window.scroll({top:0});
    document.body.style.overflow = "hidden";
    document.querySelector('.reintentar').addEventListener('click',()=>{
        location.reload();
    });
}
function exitoPedido(){
    const bg = document.querySelector(".bg");
    const exitoPedir = document.querySelector(".exito-pedir");
    bg.classList.toggle('bg_toggle');
    exitoPedir.classList.toggle('error-pedir_toggle');
    window.scroll({top:0});
    document.body.style.overflow = "hidden";
    document.querySelector('.ok').addEventListener('click',()=>{
        window.location.href='/menu/Hamburguesa';
    });
}