
let crsr =document.querySelector(".cursor") 

let blur =document.querySelector(".cursor-blur") 

let all = document.querySelectorAll(".nav h2")



all.forEach(function(tr){
    tr.addEventListener("mouseenter",function(){
       crsr.style.scale = 4
       crsr.style.border = "0.1px solid #fff"
       crsr.style.backgroundColor = "transparent"
       crsr.style.animation = " all ease 1s"
    })

    tr.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})

document.addEventListener("mousemove",function(e){
    crsr.style.left = e.x - 11 + "px"
    crsr.style.top = e.y - 11 + "px"
    blur.style.left = e.x - 140 + "px"
    blur.style.top = e.y - 140 + "px"
})

gsap.to(".quote1",{
    top:"25%",
    left:"14%",
    scrollTrigger:{
        trigger:".quote1",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 120%",
        scrub:1
    }
})

gsap.to(".quote2",{
    bottom:"4%",
    right:"18%",
    scrollTrigger:{
        trigger:".quote2",
        scroller:"body",
        // markers:true,
        start:"top 140%",
        end:"top 70%",
        duration:0.5,
        scrub:1
    }
})

gsap.to(".next1",{
    bottom:"28%",
    scrollTrigger:{
        trigger:".next1",
        scroller:"body",
        scrub:1,
        // markers:true,
        start:"top 100%",
        end:"top 85%"
    }
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
        duration:0.5,
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



















