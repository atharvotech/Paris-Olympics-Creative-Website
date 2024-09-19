function content(){
    const conatiner = document.querySelector('.container');
    // code for appending name img and decription of each card using for lopp by array in conatiner
    const names = [
        "Neeraj Chopra",
        "Manu Bhaker",
        "Manu, Sarabjot",
        "Swapnil Kusale",
        "Indian Men's Hockey",
        "Aman Sehrawat",
        "Avani Lekhara",
        "Sumit Antil",
        "Navdeep Singh",
        "Praveen Kumar",
        "Mariyappan Thangavelu",
        "Sheetal Devi"
    ];

    const dets = [
        `Born: Dec 24, 1997 <br> Sport: Javelin Throw <br> Achievement: Silver Medal <br> Details: First Indian track-and-field athlete to achieve two Olympic medals.`,
        `Born: Feb 18, 2002 <br> Sport: Shooting (10m Air Pistol Women's) <br> Achievement: Bronze Medal <br> Details: First Indian woman to win two medals at a single edition of the Olympics.`,
        `Born: Manu Bhaker (Feb 18, 2002) <br> Sarabjot Singh (Apr 12, 2001) <br> Sport: Shooting (10m Air Pistol Mixed Team) <br> Achievement: Bronze Medal <br> Details: First Indian woman to win two medals in a single edition of the Olympics.`,
        `Born: Feb 3, 1995 <br> Sport: Shooting (50m Rifle 3 Positions) <br> Achievement: Bronze Medal <br> Details: First Indian to win a medal in this discipline.`,
        `Sport: Hockey <br> Achievement: Bronze Medal <br> Details: Defeated Spain 2-1 in the third-place playoff.`,
        `Born: Oct 10, 2003 <br> Sport: Wrestling <br> Achievement: Bronze Medal <br> Details: India's youngest Olympic medallist`,
         `
            sport: "Shooting"<br>
            born: "November 8, 2001, in Jaipur, Rajasthan"<br>
            achievements: "First Indian woman to win two gold medals at the Paralympic Games. Defended her title in the women's 10m air rifle standing SH1 shooting event at Paris 2024 with a world record score."
        `,
        `
            sport: "Javelin Throw"<br>
            born: "July 6, 1998, in Sonipat, Haryana"<br>
            achievements: "First Indian man to defend his title at the Paralympics, winning gold in the men's javelin throw F64 at Paris 2024 with a throw of 70.59m, setting a new Paralympic record."
        `,
        `
            sport: "Javelin Throw"<br>
            born: "2000, in Panipat, Haryana"<br>
            achievements: "Secured India's seventh gold medal in the men's javelin throw F41 category at Paris 2024 with a personal best throw of 47.32 meters, setting a new Paralympic record."
        `,
        `
            sport: "High Jump"<br>
            born: "May 15, 2003, in Noida, Uttar Pradesh"<br>
            achievements: "Captured gold in the men's high jump T64 class at Paris 2024."
        `,
        `
            sport: "High Jump"<br>
            born: "June 28, 1995, in Salem, Tamil Nadu"<br>
            achievements: "First Indian to win medals at three consecutive Paralympics. Won gold at Rio 2016, silver at Tokyo 2020, and bronze in the high jump T42 class at Paris 2024."
        `,
        `
            sport: "Archery"<br>
            born: "2007, in Jammu and Kashmir"<br>
            achievements: "Became India's youngest Paralympic medallist at 17, securing bronze in the mixed team event alongside Rakesh Kumar at Paris 2024."
        `
    ];

    // let imgs = ['hero4.jpg', 'hero1.jpg', 'hero2.jpg', 'hero6.jpg','hockey.jpg','hero5.jpg','avni.jpg','sumit.jpg','','','y.jpg','Shital.jpg']
    let imgs = ['hero4.jpg', 'hero1.jpg', 'hero2.jpg', 'hero6.jpg','hockey.jpg','hero5.jpg','avni.jpg','sumit.jpg','navdeep.jpg','praveen.jpg','y.jpg','Shital.jpg']

    var clutter = ''
    for (let i = 0; i < names.length; i++) {
        clutter += `<div class="card disp">
        <div class="imgbx">
                    <img src="/images/${imgs[i]}" alt="" srcset="">
                </div>
                <p>
                    ${dets[i]}
                </p>
                <h2>${names[i]}</h2>
            </div>`
    }

    conatiner.innerHTML = clutter

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

}
content()
function cusAnim() {

    loadtl.from('.heading',{
        y: -500,
        ease:Circ.easeOut
    })

    loadtl.from('.container', {
        opacity:0,
    })
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

    let cs = document.querySelectorAll('.card')

    Array.from(cs).forEach(e => {
        gsap.from(e, {
            opacity:0,
            scrollTrigger: {
                trigger: e,
                scroller: "#main",
                start: "top 85%",
                end: "top 70%",
                scrub: 1,
            }
        })
    })

    gsap.from('.unHead', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.unHead',
            scroller: "#main",
            start: "top 85%",
            end: "top 70%",
            scrub: 1,
        }
    })
}