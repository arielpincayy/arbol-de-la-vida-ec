document.getElementById('red').addEventListener('click',()=>{
    window.location.href='/signUp?route='+window.location.search.split("=")[1];
});
document.getElementById('return').addEventListener('click',()=>{
    window.location.href='/';
});