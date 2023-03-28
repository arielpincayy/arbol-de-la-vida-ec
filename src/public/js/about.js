const story = document.querySelector('.story img');
const collage = document.querySelector('.collage img');
const fotosHacerArr = document.querySelectorAll('.fotos-hacer img');
const fotosHacer = document.querySelector('.fotos-hacer');
const fotosCumpleanos = document.querySelector('.fotos-cumpleanos img');

const shakeImage=(entrada,observador)=>{
    entrada.forEach(e=>{
        if (e.isIntersecting) {
            story.classList.add('story-img_toggle');
            story.classList.remove('story-img');
        }
    });
}
const shakeCollage=(entrada,observador)=>{
    entrada.forEach(e=>{
        if (e.isIntersecting) {
            collage.classList.add('collage_img_toggle');
            collage.classList.remove('collage_img');
        }
    });
}

const shakeHacer=(entrada,observador)=>{
    entrada.forEach(e=>{
        if (e.isIntersecting) {
            fotosHacerArr.forEach(i=>{
                i.classList.add('fotos-hacer-img_toggle');
                i.classList.remove('fotos-hacer-img');
            });
        }
    });
}
const shakeCumpleanos=(entrada,observador)=>{
    entrada.forEach(e=>{
        if (e.isIntersecting) {
            fotosCumpleanos.classList.add('fotos-cumpleanos-img_toggle');
            fotosCumpleanos.classList.remove('fotos-cumpleanos-img');
        }
    });
}
const observer= new IntersectionObserver(shakeImage,{
    root: null,
    rootMargin: "0px",
    threshold: 0.2
});
const observer2= new IntersectionObserver(shakeCollage,{
    root: null,
    rootMargin: "0px",
    threshold: 0.2
});
const observer3= new IntersectionObserver(shakeHacer,{
    root: null,
    rootMargin: "0px",
    threshold: 0.2
});
const observer4= new IntersectionObserver(shakeCumpleanos,{
    root: null,
    rootMargin: "0px",
    threshold: 0.2
});
observer.observe(story);
observer2.observe(collage);
observer3.observe(fotosHacer);
observer4.observe(fotosCumpleanos);