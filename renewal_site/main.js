gsap.registerPlugin(ScrollTrigger)

gsap.set(".sec1 .mouth",{
    scale:1.5
})
gsap.to(".sec1 .mouth svg",{
    scrollTrigger:{
        trigger:".sec1",
        start:"top top",
        end:"120% center",
        scrub:1,
        markers:true
    },
    y:300,
    scale:0.8
})