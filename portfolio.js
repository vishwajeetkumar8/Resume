var body = document.querySelector("body")
var cursor = document.querySelector("#cursor")
var menu = document.querySelector("#manu")

body.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x-20,
        y:dets.y-20,
    })
})

menu.onclick =()=>{
    manu.classList.toggle('bx-x');
    manu.classList.toggle('active');
}