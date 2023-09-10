function initialize(){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
}
initialize();

document.querySelectorAll(".reveal")
.forEach(function(elem){
   var spanChild = document.createElement("span")
   var spanParent = document.createElement("span")

   spanParent.classList.add("parent");
   spanChild.classList.add("child");

   spanChild.textContent = elem.textContent;
   spanParent.appendChild(spanChild);

   elem.innerHTML = "";
   elem.appendChild(spanParent)
})

// navbar animation

ScrollTrigger.create({
    trigger: "#main",
    start: "top top",
    end: "bottom -10%",
    pin: "#nav",
    scroller: "#main",
    pinSpacing: false
});
 
let tl = gsap.timeline({
    scrollTrigger: {
      start: "top -8%",
      scroller: "#main",
      scrub: 1
    },  
})

.to("#nav svg,#nav #menu",{
    opacity: 1,
    ease: Sine.easeInOut,
})

// loading elements animation

let tl2 = gsap.timeline()

tl2.from("#page1 h1 .child",{
  y: 300,
  ease: Expo.easeInOut,
  transform: "skewY(20deg)",
  duration: 2,
})

.from("#qued",{
  y: 300,
  delay: -2,
  duration: .5,
  transform: "skewY(10deg)",
  ease: Sine.easeInOut,
})

.from("#nav",{
  y: -100,
  delay: -2
})

.from("#page1 h3",{
  opacity: 0,
  y: 50,
})

// play animation


gsap.from("h6 span",{
    opacity: 1,
    ease: Sine.easeInOut,
    duration: 2,
    repeat: -1,
})


// QUED svg animation

let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#qued",  
      start: "top 70%",
      end: "top -30%",
      scroller: "#main",
      // markers: true,
      scrub: 1
    },  
})

.to("#q",{
    transform: "translate(-20%, 0%) rotate(30deg)",
    ease: Sine.easeInOut,
})
.to("#u",{
    transform: "translate(0%, 20%) rotate(-30deg)",
    ease: Sine.easeInOut,
    delay: -.5
})
.to("#d",{
    transform: "translate(0%, 140%) rotate(-10deg)",
    ease: Sine.easeInOut,
    delay: -.5
})
.to("#e",{
    transform: "translate(20%, 0%) rotate(30deg)",
    ease: Sine.easeInOut,
    delay: -.5
})

// audio function

$(function () {
    $(document).keydown(function (e) {
    //    console.log(e.keyCode);
       if (e.keyCode === 81) {
           document.querySelector("#q-audio").play()
       }else if (e.keyCode === 85) {
           document.querySelector("#u-audio").play()
       }else if (e.keyCode === 68) {
        document.querySelector("#d-audio").play()
       }else if (e.keyCode === 69) {
        document.querySelector("#e-audio").play()
       }
    });
});

// page2 content animation

gsap.from("#r-top #p-1",{
  scrollTrigger:{
    trigger: "#r-top #p-1",
    start: "top 95%",
    end: "top 80%",
    // markers: true,
    scroller: "#main",
    scrub: 4
  },
  y: 100,
  opacity: 0,
  ease: Expo.easeInOut
})

gsap.from("#r-top #p-2",{
  scrollTrigger:{
    trigger: "#r-top #p-2",
    start: "top 95%",
    end: "top 80%",
    // markers: true,
    scroller: "#main",
    scrub: 4
  },
  y: 100,
  opacity: 0,
  ease: Expo.easeInOut
})

gsap.from("#r-top #p-3",{
  scrollTrigger:{
    trigger: "#r-top #p-3",
    start: "top 95%",
    end: "top 80%",
    // markers: true,
    scroller: "#main",
    scrub: 4
  },
  y: 100,
  opacity: 0,
  ease: Expo.easeInOut
})

gsap.from("#r-btm #p-4",{
  scrollTrigger:{
    trigger: "#r-btm #p-4",
    start: "top 95%",
    end: "top 80%",
    // markers: true,
    scroller: "#main",
    scrub: 4
  },
  y: 50,
  opacity: 0,
  ease: Expo.easeInOut
})

// text changing animation

let tl4 = gsap.timeline({repeat: -1})

tl4.from("#you",{
  opacity: 0,
  x: 50,
  ease: Sine.easeInOut,
})

.to("#you",{
  opacity: 0,
  x: -50,
  ease: Sine.easeInOut,
  // duration: 2,
  delay: 2
})

.from("#do",{
  opacity: 0,
  x: 50,
  ease: Sine.easeInOut,
})

.to("#do",{
  opacity: 0,
  x: -50,
  ease: Sine.easeInOut,
  delay: 2
})

.from("#a",{
  opacity: 0,
  x: 50,
  ease: Sine.easeInOut,
})

.to("#a",{
  opacity: 0,
  x: -50,
  ease: Sine.easeInOut,
  delay: 2
})

.from("#need",{
  opacity: 0,
  x: 50,
  ease: Sine.easeInOut,
})

.to("#need",{
  opacity: 0,
  x: -50,
  ease: Sine.easeInOut,
  delay: 2
})

.from("#or",{
  opacity: 0,
  x: 50,
  ease: Sine.easeInOut,
})

.to("#or",{
  opacity: 0,
  x: -50,
  ease: Sine.easeInOut,
  delay: 2
})

// page 3 animations

gsap.from("#together h1 .child",{
  scrollTrigger: {
    trigger: "#shape",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 3,
    scroller: "#main"
  },
  y: 200,
  ease: Sine.easeInOut,
  duration: 2
})

gsap.from("#sound .child",{
  scrollTrigger: {
    trigger: "#sound",
    // markers: true,
    start: "top 100%",
    end: "top 80%",
    scrub: 3,
    scroller: "#main"
  },
  y: 200,
  ease: Sine.easeInOut,
  duration: 2
})

gsap.from("#online .child",{
  scrollTrigger: {
    trigger: "#online",
    // markers: true,
    start: "top 100%",
    end: "top 80%",
    scrub: 3,
    scroller: "#main"
  },
  y: 200,
  ease: Sine.easeInOut,
  duration: 2
})

// page3 last animation

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#clubs",
    start: "top 80%",
    end: "top 70%",
    // markers: true,
    scrub: 2,
    scroller: "#main"
  }
})

tl5.from("#club-p1",{
  y: 50,
  opacity: 0,
})

.from("#club-p2",{
  y: 50,
  opacity: 0,
})

// listen moving animation

document.querySelector("#page4").addEventListener("mousemove",function(elem){
  let dim = this.getBoundingClientRect();
  console.log(e.clientY);
  document.querySelector("#listen").style.top =  `${elem.clientY - dim.y}px`;
})

// listen color changing animation

//box 1
document.querySelector("#box1").addEventListener("mouseenter", function(){
  document.querySelector("#listen h1").style.color = "#E1DBFD"
  document.querySelector("#listen small").textContent = "15:43"
  document.querySelector("#listen small").style.color = "#E1DBFD"
  document.querySelector("#box-nav").style.backgroundColor = "#E1DBFD"
  document.querySelector("#sound-identity").style.color = "#000"
  document.querySelector("#assembly").style.color = "#000"
  document.querySelector("#mixing").style.color = "#000"
})

document.querySelector("#box1").addEventListener("mouseleave", function(){
  document.querySelector("#listen h1").style.color = "#fff"
  document.querySelector("#listen small").style.color = "#fff"
  document.querySelector("#box-nav").style.backgroundColor = "#000"
  document.querySelector("#sound-identity").style.color = "#858484"
  document.querySelector("#assembly").style.color = "#858484"
  document.querySelector("#mixing").style.color = "#858484"
})

//box 2
document.querySelector("#box2").addEventListener("mouseenter", function(){
  document.querySelector("#listen h1").style.color = "#90C3CD"
  document.querySelector("#listen small").textContent = "33:52"
  document.querySelector("#listen small").style.color = "#90C3CD"
  document.querySelector("#box-nav").style.backgroundColor = "#90C3CD"
  document.querySelector("#sound-identity").style.color = "#000"
  document.querySelector("#assembly").style.color = "#000"
  document.querySelector("#mixing").style.color = "#000"
})

document.querySelector("#box2").addEventListener("mouseleave", function(){
  document.querySelector("#listen h1").style.color = "#fff"
  document.querySelector("#listen small").style.color = "#fff"
  document.querySelector("#box-nav").style.backgroundColor = "#000"
  document.querySelector("#sound-identity").style.color = "#858484"
  document.querySelector("#assembly").style.color = "#858484"
  document.querySelector("#mixing").style.color = "#858484"
})

//box 3
document.querySelector("#box3").addEventListener("mouseenter", function(){
  document.querySelector("#listen h1").style.color = "#FF764A"
  document.querySelector("#listen small").textContent = "20:59"
  document.querySelector("#listen small").style.color = "#FF764A"
  document.querySelector("#box-nav").style.backgroundColor = "#FF764A"
  document.querySelector("#sound-identity").style.color = "#000"
  document.querySelector("#assembly").style.color = "#000"
  document.querySelector("#mixing").style.color = "#000"
  document.querySelector("#registration").style.color = "#000"
  document.querySelector("#voice-off").style.color = "#000"
  document.querySelector("#writing").style.color = "#000"
  document.querySelector("#diffusion").style.color = "#000"
})

document.querySelector("#box3").addEventListener("mouseleave", function(){
  document.querySelector("#listen h1").style.color = "#fff"
  document.querySelector("#listen small").style.color = "#fff"
  document.querySelector("#box-nav").style.backgroundColor = "#000"
  document.querySelector("#sound-identity").style.color = "#858484"
  document.querySelector("#assembly").style.color = "#858484"
  document.querySelector("#mixing").style.color = "#858484"
  document.querySelector("#registration").style.color = "#858484"
  document.querySelector("#voice-off").style.color = "#858484"
  document.querySelector("#writing").style.color = "#858484"
  document.querySelector("#diffusion").style.color = "#858484"
})

//box 4
document.querySelector("#box4").addEventListener("mouseenter", function(){
  document.querySelector("#listen h1").style.color = "#47B172"
  document.querySelector("#listen small").textContent = "7:13"
  document.querySelector("#listen small").style.color = "#47B172"
  document.querySelector("#box-nav").style.backgroundColor = "#47B172"
  document.querySelector("#sound-identity").style.color = "#000"
  document.querySelector("#assembly").style.color = "#000"
  document.querySelector("#mixing").style.color = "#000"
  document.querySelector("#registration").style.color = "#000"
  document.querySelector("#voice-off").style.color = "#000"
  document.querySelector("#sound-design").style.color = "#000"
  document.querySelector("#diffusion").style.color = "#000"
  document.querySelector("#conceptualization").style.color = "#000"
  document.querySelector("#writing").style.color = "#000"
})

document.querySelector("#box4").addEventListener("mouseleave", function(){
  document.querySelector("#listen h1").style.color = "#fff"
  document.querySelector("#listen small").style.color = "#fff"
  document.querySelector("#box-nav").style.backgroundColor = "#000"
  document.querySelector("#sound-identity").style.color = "#858484"
  document.querySelector("#assembly").style.color = "#858484"
  document.querySelector("#mixing").style.color = "#858484"
  document.querySelector("#registration").style.color = "#858484"
  document.querySelector("#voice-off").style.color = "#858484"
  document.querySelector("#sound-design").style.color = "#858484"
  document.querySelector("#diffusion").style.color = "#858484"
  document.querySelector("#conceptualization").style.color = "#858484"
  document.querySelector("#writing").style.color = "#858484"
})

//box 5
document.querySelector("#box5").addEventListener("mouseenter", function(){
  document.querySelector("#listen h1").style.color = "#FFB84F"
  document.querySelector("#listen small").textContent = "4:04"
  document.querySelector("#listen small").style.color = "#FFB84F"
  document.querySelector("#box-nav").style.backgroundColor = "#FFB84F"
  document.querySelector("#sound-identity").style.color = "#000"
  document.querySelector("#assembly").style.color = "#000"
  document.querySelector("#mixing").style.color = "#000"
  document.querySelector("#registration").style.color = "#000"
  document.querySelector("#voice-off").style.color = "#000"
  document.querySelector("#sound-design").style.color = "#000"
  document.querySelector("#diffusion").style.color = "#000"
  document.querySelector("#conceptualization").style.color = "#000"
  document.querySelector("#writing").style.color = "#000"
})

document.querySelector("#box5").addEventListener("mouseleave", function(){
  document.querySelector("#listen h1").style.color = "#fff"
  document.querySelector("#listen small").style.color = "#fff"
  document.querySelector("#box-nav").style.backgroundColor = "#000"
  document.querySelector("#sound-identity").style.color = "#858484"
  document.querySelector("#assembly").style.color = "#858484"
  document.querySelector("#mixing").style.color = "#858484"
  document.querySelector("#registration").style.color = "#858484"
  document.querySelector("#voice-off").style.color = "#858484"
  document.querySelector("#sound-design").style.color = "#858484"
  document.querySelector("#diffusion").style.color = "#858484"
  document.querySelector("#conceptualization").style.color = "#858484"
  document.querySelector("#writing").style.color = "#858484"
})

//box 6
document.querySelector("#box6").addEventListener("mouseenter", function(){
  document.querySelector("#listen h1").style.color = "#E1DBFD"
  document.querySelector("#listen small").textContent = "14:20"
  document.querySelector("#listen small").style.color = "#E1DBFD"
  document.querySelector("#box-nav").style.backgroundColor = "#E1DBFD"
  document.querySelector("#sound-identity").style.color = "#000"
  document.querySelector("#assembly").style.color = "#000"
  document.querySelector("#mixing").style.color = "#000"
  document.querySelector("#registration").style.color = "#000"
  document.querySelector("#voice-off").style.color = "#000"
  document.querySelector("#sound-design").style.color = "#000"
  document.querySelector("#diffusion").style.color = "#000"
  document.querySelector("#conceptualization").style.color = "#000"
  document.querySelector("#writing").style.color = "#000"
})

document.querySelector("#box6").addEventListener("mouseleave", function(){
  document.querySelector("#listen h1").style.color = "#fff"
  document.querySelector("#listen small").style.color = "#fff"
  document.querySelector("#box-nav").style.backgroundColor = "#000"
  document.querySelector("#sound-identity").style.color = "#858484"
  document.querySelector("#assembly").style.color = "#858484"
  document.querySelector("#mixing").style.color = "#858484"
  document.querySelector("#registration").style.color = "#858484"
  document.querySelector("#voice-off").style.color = "#858484"
  document.querySelector("#sound-design").style.color = "#858484"
  document.querySelector("#diffusion").style.color = "#858484"
  document.querySelector("#conceptualization").style.color = "#858484"
  document.querySelector("#writing").style.color = "#858484"
})

//box 7
document.querySelector("#box7").addEventListener("mouseenter", function(){
  document.querySelector("#listen h1").style.color = "#90C3CD"
  document.querySelector("#listen small").textContent = "5:17"
  document.querySelector("#listen small").style.color = "#90C3CD"
  document.querySelector("#box-nav").style.backgroundColor = "#90C3CD"
  document.querySelector("#sound-identity").style.color = "#000"
  document.querySelector("#assembly").style.color = "#000"
  document.querySelector("#mixing").style.color = "#000"
  document.querySelector("#registration").style.color = "#000"
  document.querySelector("#voice-off").style.color = "#000"
  document.querySelector("#sound-design").style.color = "#000"
  document.querySelector("#diffusion").style.color = "#000"
  document.querySelector("#conceptualization").style.color = "#000"
  document.querySelector("#writing").style.color = "#000"
})

document.querySelector("#box7").addEventListener("mouseleave", function(){
  document.querySelector("#listen h1").style.color = "#fff"
  document.querySelector("#listen small").style.color = "#fff"
  document.querySelector("#box-nav").style.backgroundColor = "#000"
  document.querySelector("#sound-identity").style.color = "#858484"
  document.querySelector("#assembly").style.color = "#858484"
  document.querySelector("#mixing").style.color = "#858484"
  document.querySelector("#registration").style.color = "#858484"
  document.querySelector("#voice-off").style.color = "#858484"
  document.querySelector("#sound-design").style.color = "#858484"
  document.querySelector("#diffusion").style.color = "#858484"
  document.querySelector("#conceptualization").style.color = "#858484"
  document.querySelector("#writing").style.color = "#858484"
})

//box 8
document.querySelector("#box8").addEventListener("mouseenter", function(){
  document.querySelector("#listen h1").style.color = "#FF764A"
  document.querySelector("#listen small").textContent = "18:53"
  document.querySelector("#listen small").style.color = "#FF764A"
  document.querySelector("#box-nav").style.backgroundColor = "#FF764A"
  document.querySelector("#sound-identity").style.color = "#000"
  document.querySelector("#assembly").style.color = "#000"
  document.querySelector("#mixing").style.color = "#000"
  document.querySelector("#registration").style.color = "#000"
  document.querySelector("#voice-off").style.color = "#000"
  document.querySelector("#sound-design").style.color = "#000"
  document.querySelector("#diffusion").style.color = "#000"
  document.querySelector("#conceptualization").style.color = "#000"
  document.querySelector("#writing").style.color = "#000"
})

document.querySelector("#box8").addEventListener("mouseleave", function(){
  document.querySelector("#listen h1").style.color = "#fff"
  document.querySelector("#listen small").style.color = "#fff"
  document.querySelector("#box-nav").style.backgroundColor = "#000"
  document.querySelector("#sound-identity").style.color = "#858484"
  document.querySelector("#assembly").style.color = "#858484"
  document.querySelector("#mixing").style.color = "#858484"
  document.querySelector("#registration").style.color = "#858484"
  document.querySelector("#voice-off").style.color = "#858484"
  document.querySelector("#sound-design").style.color = "#858484"
  document.querySelector("#diffusion").style.color = "#858484"
  document.querySelector("#conceptualization").style.color = "#858484"
  document.querySelector("#writing").style.color = "#858484"
})

//box 9
document.querySelector("#box9").addEventListener("mouseenter", function(){
  document.querySelector("#listen h1").style.color = "#47B172"
  document.querySelector("#listen small").textContent = "15:55"
  document.querySelector("#listen small").style.color = "#47B172"
  document.querySelector("#box-nav").style.backgroundColor = "#47B172"
  document.querySelector("#sound-identity").style.color = "#000"
  document.querySelector("#assembly").style.color = "#000"
  document.querySelector("#mixing").style.color = "#000"
  document.querySelector("#registration").style.color = "#000"
  document.querySelector("#sound-design").style.color = "#000"
  document.querySelector("#diffusion").style.color = "#000"
  document.querySelector("#conceptualization").style.color = "#000"
})

document.querySelector("#box9").addEventListener("mouseleave", function(){
  document.querySelector("#listen h1").style.color = "#fff"
  document.querySelector("#listen small").style.color = "#fff"
  document.querySelector("#box-nav").style.backgroundColor = "#000"
  document.querySelector("#sound-identity").style.color = "#858484"
  document.querySelector("#assembly").style.color = "#858484"
  document.querySelector("#mixing").style.color = "#858484"
  document.querySelector("#registration").style.color = "#858484"
  document.querySelector("#sound-design").style.color = "#858484"
  document.querySelector("#diffusion").style.color = "#858484"
  document.querySelector("#conceptualization").style.color = "#858484"
})

// box-nav pin 

ScrollTrigger.create({
  trigger: "#box-container",
  pin: "#box-nav",
  start: "top 80%",
  // end: "top -110%",
  // markers: true,
  scroller: "#main",
  pinSpacing: false
})

gsap.to("#box-nav",{
  scrollTrigger: {
    trigger: "#box9",
    start: "top 20%",
    end: "top 10%",
    // markers: true,
    scroller: "#main",
    scrub: 1
  },
  opacity: 0,
  ease: Sine.easeInOut,
  display: "none",
})

// page5 animations

gsap.from("#creation h1 .child",{
  scrollTrigger: {
    trigger: "#creation",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 3,
    scroller: "#main"
  },
  y: 200,
  ease: Sine.easeInOut,
  duration: 2
})

gsap.from("#production h1 .child",{
  scrollTrigger: {
    trigger: "#production",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 3,
    scroller: "#main"
  },
  y: 200,
  ease: Sine.easeInOut,
  duration: 2
})

gsap.from("#diffusion2 h1 .child",{
  scrollTrigger: {
    trigger: "#diffusion2",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 3,
    scroller: "#main"
  },
  y: 200,
  ease: Sine.easeInOut,
  duration: 2
})

// page-6 animations

gsap.to("#white-box-1",{
  scrollTrigger: {
    trigger: "#white-box-1",
    start: "top 10%",
    end: "top -170%",
    // markers: true,
    scroller: "#main",
    pin: true,
    scrub: 3
  },
  backgroundColor: "#636262",
  transform: "translate3d(0px, 0px, 0px) rotateX(-2.7435deg) scale(0.9451, 0.9451)",
  display: "none" 
})

gsap.to("#white-box-2",{
  scrollTrigger: {
    trigger: "#white-box-2",
    start: "top 10%",
    end: "top -80%",
    // markers: true,
    scroller: "#main",
    pin: true,
    scrub: 3
  },
  backgroundColor: "#636262",
  transform: "translate3d(0px, 0px, 0px) rotateX(-2.7435deg) scale(0.9451, 0.9451)",
  display: "none",
})

gsap.to("#white-box-3",{
  scrollTrigger: {
    trigger: "#white-box-3",
    start: "top 10%",
    // markers: true,
    scroller: "#main",
    scrub: 3
  },
  backgroundColor: "#636262",
  transform: "translate3d(0px, 0px, 0px) rotateX(-2.7435deg) scale(0.9451, 0.9451)" 
})

// image move animation

// author

document.querySelector("#author-1").addEventListener("mouseenter", function(){
  document.querySelector("#author-img-1").style.transform = "scale(1)";
})

document.querySelector("#author-1").addEventListener("mouseleave", function(){
  document.querySelector("#author-img-1").style.transform = "scale(0)";
})

document.querySelector("#author-1").addEventListener("mousemove", function(elem){
  let dim = this.getBoundingClientRect()
  document.querySelector("#author-img-1").style.top = `${elem.clientY - dim.y-250}px`;
  document.querySelector("#author-img-1").style.left =  `${elem.clientX - dim.x+20}px`;
})

// project manager

document.querySelector("#author-2").addEventListener("mouseenter", function(){
  document.querySelector("#author-img-2").style.transform = "scale(1)";
})

document.querySelector("#author-2").addEventListener("mouseleave", function(){
  document.querySelector("#author-img-2").style.transform = "scale(0)";
})

document.querySelector("#author-2").addEventListener("mousemove", function(elem){
  let dim = this.getBoundingClientRect()
  document.querySelector("#author-img-2").style.top = `${elem.clientY - dim.y-250}px`;
  document.querySelector("#author-img-2").style.left =  `${elem.clientX - dim.x+20}px`;
})

// graphic designer

document.querySelector("#author-3").addEventListener("mouseenter", function(){
  document.querySelector("#author-img-3").style.transform = "scale(1)";
})

document.querySelector("#author-3").addEventListener("mouseleave", function(){
  document.querySelector("#author-img-3").style.transform = "scale(0)";
})

document.querySelector("#author-3").addEventListener("mousemove", function(elem){
  let dim = this.getBoundingClientRect()
  document.querySelector("#author-img-3").style.top = `${elem.clientY - dim.y-250}px`;
  document.querySelector("#author-img-3").style.left =  `${elem.clientX - dim.x+20}px`;
})

// sound engineers

document.querySelector("#author-4").addEventListener("mouseenter", function(){
  document.querySelector("#author-img-4").style.transform = "scale(1)";
})

document.querySelector("#author-4").addEventListener("mouseleave", function(){
  document.querySelector("#author-img-4").style.transform = "scale(0)";
})

document.querySelector("#author-4").addEventListener("mousemove", function(elem){
  let dim = this.getBoundingClientRect()
  document.querySelector("#author-img-4").style.top = `${elem.clientY - dim.y-250}px`;
  document.querySelector("#author-img-4").style.left =  `${elem.clientX - dim.x+20}px`;
})

// journalists

document.querySelector("#author-5").addEventListener("mouseenter", function(){
  document.querySelector("#author-img-5").style.transform = "scale(1)";
})

document.querySelector("#author-5").addEventListener("mouseleave", function(){
  document.querySelector("#author-img-5").style.transform = "scale(0)";
})

document.querySelector("#author-5").addEventListener("mousemove", function(elem){
  let dim = this.getBoundingClientRect()
  document.querySelector("#author-img-5").style.top = `${elem.clientY - dim.y-250}px`;
  document.querySelector("#author-img-5").style.left =  `${elem.clientX - dim.x+20}px`;
})

// directors

document.querySelector("#author-6").addEventListener("mouseenter", function(){
  document.querySelector("#author-img-6").style.transform = "scale(1)";
})

document.querySelector("#author-6").addEventListener("mouseleave", function(){
  document.querySelector("#author-img-6").style.transform = "scale(0)";
})

document.querySelector("#author-6").addEventListener("mousemove", function(elem){
  let dim = this.getBoundingClientRect()
  document.querySelector("#author-img-6").style.top = `${elem.clientY - dim.y-250}px`;
  document.querySelector("#author-img-6").style.left =  `${elem.clientX - dim.x+20}px`;
})

// voice off

document.querySelector("#author-7").addEventListener("mouseenter", function(){
  document.querySelector("#author-img-7").style.transform = "scale(1)";
})

document.querySelector("#author-7").addEventListener("mouseleave", function(){
  document.querySelector("#author-img-7").style.transform = "scale(0)";
})

document.querySelector("#author-7").addEventListener("mousemove", function(elem){
  let dim = this.getBoundingClientRect()
  document.querySelector("#author-img-7").style.top = `${elem.clientY - dim.y-250}px`;
  document.querySelector("#author-img-7").style.left =  `${elem.clientX - dim.x+20}px`;
})

gsap.to("#menu small",{
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    start: "top 5%",
    end: "top 6%",
    scrub: 5
  },
  color: "black",
})

gsap.to("#menu #line",{
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    start: "top 5%",
    end: "top 6%",
    scrub: 5
  },
  backgroundColor: "black",
})

gsap.to("#nav button",{
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    start: "top 5%",
    end: "top 6%",
    scrub: 5
  },
  backgroundColor: "black",
  color: "white",
  border: "1px solid #000"
})

gsap.to("#nav svg path",{
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    start: "top 5%",
    end: "top 6%",
    scrub: 5,
  },
  fill: "#000"
})




// gsap.to("#menu small",{
//   scrollTrigger: {
//     trigger: "#page10",
//     scroller: "#main",
//     start: "top 5%",
//     end: "top 6%",
//     scrub: 5,
//   },
//   color: "white",
// })

// gsap.to("#menu #line",{
//   scrollTrigger: {
//     trigger: "#page10",
//     scroller: "#main",
//     start: "top 5%",
//     end: "top 6%",
//     scrub: 5
//   },
//   backgroundColor: "white",
// })

// gsap.to("#nav button",{
//   scrollTrigger: {
//     trigger: "#page10",
//     scroller: "#main",
//     start: "top 5%",
//     end: "top 6%",
//     scrub: 5
//   },
//   backgroundColor: "white",
//   color: "black",
//   border: "1px solid #fff"
// })

// gsap.to("#nav svg path",{
//   scrollTrigger: {
//     trigger: "#page10",
//     scroller: "#main",
//     start: "top 5%",
//     end: "top 6%",
//     scrub: 5,
//   },
//   fill: "#fff"
// })