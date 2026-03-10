document.addEventListener("DOMContentLoaded", () => {

gsap.registerPlugin(ScrollTrigger)

/* ===============================
   HERO SLIDER
================================ */

const slides = document.querySelectorAll(".hero-slide")
let currentSlide = 0

if(slides.length){

setInterval(() => {

slides[currentSlide].classList.remove("active")

currentSlide = (currentSlide + 1) % slides.length

slides[currentSlide].classList.add("active")

},5000)

}


/* ===============================
   HERO TEXT ANIMATION
================================ */

gsap.fromTo(".hero-title",
{
clipPath:"inset(0 100% 0 0)"
},
{
clipPath:"inset(0 0% 0 0)",
duration:1.4,
ease:"power3.out"
})

gsap.fromTo(".hero-note",
{
clipPath:"inset(0 100% 0 0)"
},
{
clipPath:"inset(0 0% 0 0)",
duration:1.4,
delay:.4,
ease:"power3.out"
})


/* ===============================
   ABOUT SECTION
================================ */

gsap.from(".about-copy",{
opacity:0,
y:50,
duration:1,
ease:"power3.out",
scrollTrigger:{
trigger:".about",
start:"top 70%"
}
})

gsap.fromTo(".about-visual img",
{
clipPath:"inset(100% 0 0 0)"
},
{
clipPath:"inset(0 0 0 0)",
duration:1.2,
ease:"power3.out",
scrollTrigger:{
trigger:".about-visual",
start:"top 75%"
}
})


/* ===============================
   STORY CARDS
================================ */

gsap.from(".story-card",{
opacity:0,
y:40,
stagger:.25,
duration:1,
ease:"power3.out",
scrollTrigger:{
trigger:".story",
start:"top 70%"
}
})


/* ===============================
  GALLERY AUTO CAROUSEL 
================================ */

if(window.innerWidth > 860){

const track = document.querySelector(".gallery-track")

let index = 0

setInterval(()=>{

index++

const itemWidth = document.querySelector(".gallery-item").offsetWidth + 28

track.style.transform = `translateX(-${index * itemWidth}px)`

if(index >= track.children.length - 2){
index = 0
track.style.transform = "translateX(0)"
}

},3500)

}


/* ===============================
   CLIP TEXT REVEALS
================================ */

gsap.utils.toArray(".reveal-clip").forEach(el => {

const target = el.firstElementChild

if(!target) return

gsap.to(target,{
clipPath:"inset(0 0% 0 0)",
duration:1.8,
ease:"sine.out",
scrollTrigger:{
trigger:el,
start:"top 80%"
}
})

})


/* ===============================
   FADE UP ELEMENTS
================================ */

gsap.utils.toArray(".fade-up").forEach(el => {

gsap.to(el,{
opacity:1,
y:0,
duration:1,
ease:"power3.out",
scrollTrigger:{
trigger:el,
start:"top 85%"
}
})

})


/* ===============================
   IMAGE REVEAL
================================ */

gsap.utils.toArray(".reveal-clip-up").forEach(el => {

gsap.fromTo(el,
{
clipPath:"inset(100% 0 0 0)",
scale:1.1
},
{
clipPath:"inset(0% 0 0 0)",
scale:1,
duration:1.2,
ease:"power3.out",
scrollTrigger:{
trigger:el,
start:"top 80%"
}
})

})


/* ===============================
   REFRESH SCROLLTRIGGER
================================ */

window.addEventListener("load", () => {
ScrollTrigger.refresh()
})

})