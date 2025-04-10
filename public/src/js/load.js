var loadtl;

function revealToSpan() {
    document.querySelectorAll('.reveal')
        .forEach(function (elem) {
            let parent = document.createElement('span')
            let child = document.createElement('span')
            parent.classList.add('parent')
            child.classList.add('child')

            child.innerHTML = elem.innerHTML
            parent.appendChild(child)

            elem.innerHTML = ""
            elem.appendChild(parent)

        })
}

function load() {
    loadtl = gsap.timeline()
    const loader = document.querySelector('.loader')

    loadtl.from('#loader .child span', {
        x: 100,
        duration: 1,
        stagger: .2,
        ease: Power3.easeInOut,
    });
    loadtl.to('#loader .parent .child', {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut,
    });

    loadtl.to('#loader', {
        height: 0,
        duration: .5,
        ease: Circ.easeInOut,
    })

    loadtl.to('#green', {
        height: '100vh',
        top: 0,
        delay: -.25,
        duration: .7,
        ease: Circ.easeInOut,
    })
    loadtl.to('#green', {
       opacity:0,
        ease: Circ.easeInOut,
    })

    loadtl.to('#green', {
        display:'none',
        ease: Circ.easeInOut,
        duration:0,
    })

    loadtl.to('#loader',{
        duration:0,
        display:'none',
    })

    defAnim()
}

const startTime = Date.now();
window.onload = function () {
    revealToSpan()
    const loadTime = Date.now() - startTime;
    if (loadTime < 500) {
        setTimeout(load, 500 - loadTime);
    } else {
        load();
    }
};

