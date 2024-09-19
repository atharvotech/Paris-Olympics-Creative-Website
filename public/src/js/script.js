
function defAnim() {
    //locomotive


    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        lerp: 0.07,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });






    //nvabar animation
    loadtl.from(".navbar ", {
        y: "-100%",
        duration: 1,
        delay:-.7,
        ease: "bounce.out",
    })
    loadtl.from(".navbar .logo", {
        y: "-200%",
        duration: 1,
        ease: "back.out(2)",
    })

    //footer animation
    gsap.from("footer .logo", {
        x: "-100%",
        duration: 1.5,
        scale: 0.5,
        scrollTrigger: {
            trigger: "footer",
            scroller: "#main",
            start: "top 85%",
            end: "top 68%",
            scrub: 2,
        }
    })
    gsap.from("footer .connect", {
        scaleY: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "footer .connect",
            scroller: "#main",
            start: "top 96.5%",
            end: "top 95.5%",
            scrub: 2,
        }
    })
    gsap.from("footer .cred", {
        scaleX: .5,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "footer .cred",
            scroller: "#main",
            start: "top 97%",
            end: "top 95.5%",
            scrub: 2,
        }
    },)

    let lines = document.querySelectorAll('.line')
    Array.from(lines).forEach(e => {
        gsap.from(e, {
            scaleX: 0,
            duration: 5,
            ease: Circ.easeInOut,
            scrollTrigger: {
                trigger: e,
                scroller: "#main",
                start: "top 85%",
                end: "top 70%",
                scrub: 1,
                pin: true,
            }
        })
    })

    let lmbtn = document.querySelectorAll('.lm-btn')
    Array.from(lmbtn).forEach(e => {
        gsap.from(e, {
            scale: 0,
            ease: 'back.out(3)',
            scrollTrigger: {
                trigger: e,
                scroller: "#main",
                start: "top 85%",
                end: "top 70%",
                scrub: 1,
            }
        })
    })

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

    cusAnim()
}
function nav() {
    navtl = gsap.timeline()
    main = document.querySelector('#main');

    navtl.from('nav ul', {
        height: 0,
        duration: .6,
    });
    navtl.from('nav ul li', {
        x: "-100%",
        duration: .6,
        stagger: .1,
    });

    navtl.pause()

}

function cursor() {
    Shery.mouseFollower()
    var mask = document.querySelectorAll(".mask")
    var disp = document.querySelectorAll(".disp")


    disp.forEach(e => {

        e.addEventListener("mouseover", (dets) => {
            gsap.to('.mousefollower', {
                scale: 2,
                duration: .5,
                ease: "Power1.inout",
            })

            gsap.to('#behindmouse', {
                backgroundColor: "#000",
            })
        })

        e.addEventListener("mouseleave", (dets) => {
            gsap.to('.mousefollower', {
                scale: 1,
                duration: 1,
                ease: "elastic.out",
            })
            gsap.to('#behindmouse', {

                backgroundColor: "#fff",
            })
        })
    })

    mask.forEach(e => {

        e.addEventListener("mouseover", (dets) => {
            gsap.to('.mousefollower', {
                scale: 1.5,
                duration: .5,
                ease: "elastic",
            })
        })

        e.addEventListener("mouseleave", (dets) => {
            gsap.to('.mousefollower', {
                scale: 1,
                duration: 1,
                ease: "elastic.out",
            })
        })
    })

    // let cn = document.querySelector('.cn')
    // console.log(cn);

    // cn.addEventListener("mouseenter", (dets) => {
    //     gsap.to('.mousefollower', {
    //         animationPlayState:'running',
    //         scale: 2.5,
    //         duration: .5,
    //         ease: "elastic",
    //     })
    // })

    // cn.addEventListener("mouseleave", (dets) => {
    //     console.log('leave');

    //     gsap.to('.mousefollower', {
    //         scale: 1,
    //         duration: 1,
    //         ease: "elastic.out",
    //     })
    // })



}

//disclamer
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
    opacity: 0,
    duration: 0.3,
})
mtl.from('.modal .mhead.two', {
    x: '100%',
    duration: 0.3,
})

mtl.from('.modal p', {
    y: '-100%',
    opacity: 0,
    duration: 0.3,
})

mtl.from('.modal .close', {
    scale: 0,
    duration: 0.3,
})


mtl.pause()

// document.querySelector('.modal .close').addEventListener('click', () => {
//     mtl.reverse()
// })

// document.querySelector('.modal .close i').addEventListener('click', () => {
//     mtl.reverse()
// })

// document.querySelector('footer .copy').addEventListener('click', (e) => {
//     mtl.play()
// })

nav()
cursor()

