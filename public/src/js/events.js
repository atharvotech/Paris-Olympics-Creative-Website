
gsap.registerPlugin(ScrollTrigger);

let spCrads = document.querySelectorAll('.spCard')

var clutter = ""

spCrads.forEach((e, i) => {

    if (i % 2 == 0) {
        e.classList.add('a')
        clutter += e
    }
    else {
        e.classList.add('ab')
        clutter += e
    }
});

spCrads.innerHTML = clutter


let as = document.querySelectorAll(".a");
let bs = document.querySelectorAll(".ab");
function cusAnim() {

    VanillaTilt.init(document.querySelectorAll(".spCard"), {
        max: 15,
        speed: 1,
        perspective: 1000,
        // scale: 1,
        glare: true,
        "max-glare": 1,

    });

    Array.from(as).forEach((e, i) => {
        gsap.from(e, {
            // x: "-130%",
            scale: 0,
            duration: 1,
            opacity: 0,
            ease: "back.out(1)",
            scrollTrigger: {
                trigger: as[i],
                scroller: "#main",
                start: "top 80%",
                scrub: 2,
                end: "top 50%"
            }
        })
    })

    Array.from(bs).forEach((e, i) => {
        gsap.from(e, {
            scale: 0,
            duration: 1,
            opacity: 0,
            ease: 'back.out(1)',
            scrollTrigger: {
                trigger: bs[i],
                scroller: "#main",
                start: "top 80%",
                scrub: 2,
                end: "top 50%"
            }
        })
    })


    // loadtl.from('.spCard', {
    //     scale:0,
    //     duration: 1,
    //     ease: "power1.out",
    // }, 'event')



    // tl2.from('.line3.elem', {
    //     x: "-120%",
    //     opacity: 0,
    // }, "line2.elem")

    // tl2.from('.line4.elem', {
    //     x: "120%",
    //     opacity: 0,
    // }, "line2.elem")

    let h1 = document.querySelector(".titles")
    function breakTest() {
        var h1txt = h1.innerHTML

        var splittedText = h1txt.split('');
        var halfValue = splittedText.length / 2

        var clutter = ""

        splittedText.forEach((e, i) => {
            if (i < halfValue) {
                clutter += `<span class="a">${e}</span>`
            }
            else {
                clutter += `<span class="b">${e}</span>`
            }
        });

        h1.innerHTML = clutter
    }

    breakTest()

    loadtl.from('.titles',{
        scaleX:0,
    })

    loadtl.from(h1.querySelectorAll('.a'), {
        y: "100%",
        opacity: 0,
        duration: .6,
        stagger: 0.15,
    }, 'gp')

    loadtl.from(h1.querySelectorAll('.b'), {
        y: "100%",
        opacity: 0,
        duration: .6,
        stagger: -0.15,
    }, 'gp')

    let unC = document.querySelectorAll('.unCard')

    Array.from(unC).forEach(e => {
        gsap.from(e, {
            opacity: 0,
            scale: 0,
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


    loadtl.from('.head',{
        opacity:0,
        duration:.6,
    })



    loadtl.from('.spCard.ab', {
        x: '130%',
        duration: .7,
    }, 'a')

    loadtl.from('.spCard.a', {
        x: '-130%',
        duration: .7,
    }, 'a')

}