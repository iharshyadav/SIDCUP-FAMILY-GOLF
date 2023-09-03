
let crsr =document.querySelector(".cursor") 

let blur =document.querySelector(".cursor-blur") 

document.addEventListener("mousemove",function(e){
    crsr.style.left = e.x - 11 + "px"
    crsr.style.top = e.y - 11 + "px"
    blur.style.left = e.x - 140 + "px"
    blur.style.top = e.y - 140 + "px"
})


gsap.to(".nav",{
    backgroundColor:"black",
    height:"12vh",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".content",{
    backgroundColor:"black",
    // duration:0.5,
    scrollTrigger:{
        trigger:".content",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})



















