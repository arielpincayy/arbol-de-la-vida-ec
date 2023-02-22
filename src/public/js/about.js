const story = document.querySelector('.story img');
const collage = document.querySelector('.collage img');

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
            console.log('enter');
            collage.classList.add('collage_img_toggle');
            collage.classList.remove('collage_img');
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
observer.observe(story);
observer2.observe(collage);