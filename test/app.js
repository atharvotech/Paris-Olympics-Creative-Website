var mtl = gsap.timeline()

mtl.to('.modal', {
    display: 'block',
    duration: 0,
});
mtl.from('.modal', {
    scale: 0,
    duration: 0.5,
    ease: "back.out(3)",
})

mtl.from('.modal .mhead.one', {
    x: '-100%',
    duration: 0.3,
})

mtl.from('.modal .mdata', {
    y: '100%',
    opacity:0,
    duration: 0.3,
})
mtl.from('.modal .mhead.two', {
    x: '100%',
    duration: 0.3,
})

mtl.from('.modal p', {
    y: '-100%',
    opacity:0,
    duration: 0.3,
})

mtl.from('.modal .close',{
    scale:0,
    duration:0.3,
})


// mtl.pause()