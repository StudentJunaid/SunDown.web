const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function page4Animation(){
    
let elemCon = document.querySelector(".elem-container");
let fix = document.querySelector(".fixed-image");
var elems = document.querySelectorAll(".elem");

elemCon.addEventListener('mouseleave', function(){
   fix.style.display = "none"
})


elems.forEach(function(e){
    e.addEventListener('mouseenter',() =>{
      var image = e.getAttribute('data-image');
      fix.style.display = "block"
      fix.style.backgroundImage = `url(${image})`
    })
})

}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
       
      });
}

function manuAnimation(){
    var navImag = document.querySelector("nav img")
    var fullscr = document.querySelector("#full-screen");
    var manu = document.querySelector("nav h3");
    var flag = 0;
    
    manu.addEventListener('click',() => {
        if(flag == 0){
            fullscr.style.top = "0"
            navImag.style.opacity = 0;
            flag = 1;
        }else{
            fullscr.style.top = "-100%"
            navImag.style.opacity = 1;
            flag = 0;
        }
    })
 }

 function loaderAnimation(){
    var loader = document.querySelector("#loader")

setTimeout(function(){
     loader.style.top = "-100%"
},3500)

 }
    

swiperAnimation()
page4Animation();
manuAnimation();
loaderAnimation();


