const controller = new ScrollMagic.Controller()

let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: '.intro',
    triggerHook: 0
})
.addIndicators()
.setPin('.intro')
.addTo(controller)

let accelAmount = 0.1
let scrollPosition = 0
let delay = 0

scene.on('update', (e) => {
    scrollPosition = e.scrollPos / 1000
    console.log(scrollPosition)
})

let video = document.querySelector('video')

setInterval(() => {
    delay+= (scrollPosition - delay) * accelAmount
    console.log(scrollPosition, delay)
    video.currentTime = delay
}, 33.3)

let textAnim = gsap.fromTo('.intro h1', {
    opacity: 1
}, {
    opacity: 0
}, 3)

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: '.intro',
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller)
