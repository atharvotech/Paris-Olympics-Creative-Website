const mouseDiv = document.querySelectorAll(".mousefollower")
Shery.imageEffect('.hero-imgs', {
    style: 5,
    config: { "a": { "value": 1.15, "range": [0, 30] }, "b": { "value": -0.99, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.3130330412263307 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 2.6, "range": [1, 15] }, "durationOut": { "value": 0.55, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1.03, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.76, "range": [0, 10] }, "metaball": { "value": 0.12, "range": [0, 2], "_gsap": { "id": 33 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.35, "range": [0, 2] }, "noise_scale": { "value": 21.37, "range": [0, 100] } },
    gooey: true,
})

Shery.makeMagnet('.hero-imgs', {
    mouseFollower: true,
    text: "",
})


let e = document.querySelector('.hero-imgs');

e.addEventListener("mouseenter", (dets) => {
    gsap.to('#behindmouse', {
        scale: 1.5,
        backgroundColor: "rgba(0, 0, 0, 0)",
        duration: .5,
        ease: "elastic",
    })
})

e.addEventListener("mouseleave", (dets) => {
    gsap.to('#behindmouse', {
        scale: 1,
        backgroundColor: "#fff",
        duration: .5,
        ease: "elastic",
    })
})



function cusAnim() {





    loadtl.from(".hero-container", {
        y: '-111%',
        scale: 0,
        borderRadius: '100%',
        duration: 1,
        // ease: "bounce.out",
    })

    gsap.from('.slogan', {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        scrub: 2,
        delay: (i) => i * 0.1,
        scrollTrigger: {
            trigger: '.slogan',
            scroller: "#main",
            start: "top 85%",
            end: "top 70%",
            scrub: 1,
        }

    });


    function breakText(e) {
        let sp = document.querySelector(e)
        let h1txt = sp.innerText

        let splittedText = h1txt.split('');
        let halfValue = splittedText.length / 2

        let clutter = ""

        splittedText.forEach((e, i) => {
            if (i < halfValue) {
                clutter += `<span class="a">${e}</span>`
            }
            else {
                clutter += `<span class="b">${e}</span>`
            }
        });

        sp.innerHTML = clutter
    }

    breakText('.sports .titles')



    var stl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sports .titles',
            scroller: "#main",
            start: "top 85%",
            end: "top 70%",
            scrub: 1
        }
    })
    let spT = document.querySelector('.sports .titles')
    stl.from('.sports .titles',{
        scaleX:0,
    })
    stl.from(spT.querySelectorAll('.a'), {
        y: "100%",
        opacity: 0,
        duration: .6,
        stagger: 0.15,
    }, 'gp')

    stl.from(spT.querySelectorAll('.b'), {
        y: "100%",
        opacity: 0,
        duration: .6,
        stagger: -0.15,
    }, 'gp')

    gsap.from('.spD', {
        opacity: 0,
        y: '-111%',
        scale: 0,
        borderRadius: '100%',
        duration: 1,
        ease: Circ.easeInOut,

        scrollTrigger: {
            trigger: '.spD',
            scroller: "#main",
            start: "top 80%",
            end: "top 65%",
            scrub: 1,
        }
    })

    let lis = document.querySelectorAll('.sports ul li')

    Array.from(lis).forEach(e => {
        gsap.from(e, {
            opacity: 0,
            y: '-111%',
            scale: 0,
            borderRadius: '100%',
            duration: 1,
            ease: Circ.easeInOut,

            scrollTrigger: {
                trigger: e,
                scroller: "#main",
                start: "top 85%",
                end: "top 70%",
                scrub: 1,
            }
        })
    })

    let haeds = document.querySelectorAll('.head')
    Array.from(haeds).forEach(e => {
        gsap.from(e, {
            opacity: 0,
            x: '-111%',
            duration: 1,
            ease: Circ.easeInOut,

            scrollTrigger: {
                trigger: e,
                scroller: "#main",
                start: "top 85%",
                end: "top 70%",
                scrub: 1,
            }
        })
    })

    let spCards = document.querySelectorAll('.spCard')
    Array.from(spCards).forEach(e => {
        gsap.from(e, {
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: 'back.out(2)',
            scrollTrigger: {
                trigger: e,
                scroller: "#main",
                start: "top 85%",
                end: "top 70%",
                scrub: 1,
            }
        })
    })

    breakText('.athletes .titles')


    let atT = document.querySelector('.athletes .titles')

    var atl = gsap.timeline({
        scrollTrigger: {
            trigger: '.athletes .titles',
            scroller: "#main",
            start: "top 80%",
            end: "top 65%",
            scrub: 1
        }
    })

    atl.from('.athletes .titles', {
        scaleX:0,
    });

    atl.from(atT.querySelectorAll('.a'), {
        y: "100%",
        opacity: 0,
        duration: .6,
        stagger: 0.15,
    }, 'gp')

    atl.from(atT.querySelectorAll('.b'), {
        y: "100%",
        opacity: 0,
        duration: .6,
        stagger: -0.15,
    }, 'gp')

    let lis2 = document.querySelectorAll('.athletes ul li')

    Array.from(lis2).forEach(e => {
        gsap.from(e, {
            opacity: 0,
            y: '-111%',
            scale: 0,
            borderRadius: '100%',
            duration: 1,
            ease: Circ.easeInOut,

            scrollTrigger: {
                trigger: e,
                scroller: "#main",
                start: "top 85%",
                end: "top 70%",
                scrub: 1,
            }
        })
    })

    gsap.from('.athletes p', {
        opacity: 0,
        y: '-111%',
        scale: 0,
        borderRadius: '100%',
        duration: 1,
        ease: Circ.easeInOut,
    })

    let atC = document.querySelectorAll('.athletes .athContainer .athCard')

    Array.from(atC).forEach(e => {
        gsap.from(e, {
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: 'back.out(2)',
            scrollTrigger: {
                trigger: e,
                scroller: "#main",
                start: "top 85%",
                end: "top 70%",
                scrub: 1,
            }
        })
    })

    // gsap.from('.sports .titles', {
    //     opacity: 0,
    //     y: 100,
    //     duration: 1,
    //     ease: "power2.out",
    //     srub: 2,
    //     delay: (i) => i * 0.1,


    // });



}
