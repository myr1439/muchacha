gsap.registerPlugin(ScrollTrigger)

function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        //console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
lenis()
///////////////////////////////////////////////

// 스크롤 속도
document.addEventListener('scroll', function () {
    let elements = document.querySelectorAll('.scroll');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    elements.forEach(element => {
        let speed = element.getAttribute('data-scroll-speed');
        let yPos = -((scrollTop) * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

//sec1 mouth
gsap.set(".sec1 .mouth", {
    scale: 1.5
})
gsap.to(".sec1 .mouth svg", {
    scrollTrigger: {
        trigger: ".sec1",
        start: "top top",
        end: "200% bottom",
        scrub: 1,
        // markers:true
    },
    y: 300,
    scale: 0.8,
})

///////////////////////////////////////////////////////////
// sec2

let tl = gsap.timeline();
tl.fromTo(".sec2 .mouth", {scale: 0}, {scale: 1})
  .fromTo(".sec2 .box_ani .line", {height:0}, {height:"100px"})
  .fromTo(".sec2 .box_ani .circle", {scale: 0}, {scale: 1})
  .fromTo(".sec2 .box_ani .left span:nth-child(5)",{scale:0, y:-50}, {scale: 1,y:0})
  .fromTo(".sec2 .box_ani .right span:nth-child(1)",{scale:0, y:-50}, {scale: 1,y:0},"<")
  .fromTo(".sec2 .box_ani .left span:nth-child(4)",{scale:0, y:-60}, {scale: 1,y:0},"<")
  .fromTo(".sec2 .box_ani .right span:nth-child(2)",{scale:0, y:-60}, {scale: 1,y:0},"<")
  .fromTo(".sec2 .box_ani .left span:nth-child(3)",{scale:0, y:-70}, {scale: 1,y:0},"<")
  .fromTo(".sec2 .box_ani .right span:nth-child(3)",{scale:0, y:-70}, {scale: 1,y:0},"<")
  .fromTo(".sec2 .box_ani .left span:nth-child(2)",{scale:0, y:-80}, {scale: 1,y:0},"<")
  .fromTo(".sec2 .box_ani .right span:nth-child(4)",{scale:0, y:-80}, {scale: 1,y:0},"<")
  .fromTo(".sec2 .box_ani .left span:nth-child(1)",{scale:0, y:-90}, {scale: 1,y:0},"<")
  .fromTo(".sec2 .box_ani .right span:nth-child(5)",{scale:0, y:-90}, {scale: 1,y:0},"<")
//   .fromTo(".sec2 .box_ani .left span:nth-child(1)",{scale:0, y:-100}, {scale: 1,y:0})

ScrollTrigger.create({
    animation: tl,
    trigger: ".sec2",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub:1,
    anticipatePin:1,
    markers: true
})

