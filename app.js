let tl = gsap.timeline({
    scrollTrigger: {
        trigger: 'video',
        scrub: 1,
        start:"top top",
        end: "+=4000",
        pin: true
    }
})

tl.fromTo('video', {
    currentTime: 0
}, {
    currentTime: 9,
    ease: "none",
    duration: 7
})

gsap.fromTo('.intro h1', {
    opacity: 1
}, {
    scrollTrigger: {
        trigger: '.intro h1',
        scrub: 0.5,
        pin: true,
        start: 'center center',
        end: "+=500"
    },
    opacity: 0,
})
