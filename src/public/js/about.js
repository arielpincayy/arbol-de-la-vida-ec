const story = document.querySelector('.story img');

const shakeImage=(entrada,observador)=>{
    entrada.forEach(e=>{
        if (e.isIntersecting) {
            console.log('entranding uwu');
            story.classList.remove('story-img');
            story.classList.add('story-img_toggle');
        }
    });
}
const observer= new IntersectionObserver(shakeImage,{
    root: null,
    rootMargin: "0px",
    threshold: 0.2
});
observer.observe(story);