// Custom cursor & magic effect (do not change)
// const cursor = document.getElementById("cursor");

// document.addEventListener("mousemove", (event) => {
//   cursor.style.left = `${event.clientX + 30}px`;
//   cursor.style.top = `${event.clientY + 40}px`;
// });

// document.addEventListener("click", (event) => {
//   let magicEffect = document.createElement("div");
//   magicEffect.classList.add("magic-effect");
//   document.body.appendChild(magicEffect);
//   magicEffect.style.left = `${event.clientX}px`;
//   magicEffect.style.top = `${event.clientY}px`; // Center effect at pointer
//   setTimeout(() => magicEffect.remove(), 500);
// });




var bigBox1 = document.getElementById('bigBox1');
var bigBox2 = document.getElementById('bigBox2');
var bigBox3 = document.getElementById('bigBox3');
var smallBox1=document.getElementById('smallBox1');
var smallBox2=document.getElementById('smallBox2');
var smallBox3=document.getElementById('smallBox3');

smallBox2.addEventListener('click', function() {
  let displayValuebb1 = window.getComputedStyle(bigBox1).display;
  let displayValuebb2= window.getComputedStyle(bigBox2).display;
  let displayValuebb3= window.getComputedStyle(bigBox3).display;
  let displayValuesb1= window.getComputedStyle(smallBox1).display;
  let displayValuesb2= window.getComputedStyle(smallBox2).display;
  let displayValuesb3= window.getComputedStyle(smallBox3).display;
  bigBox1.style.display="none";
  smallBox1.style.display="block";
  bigBox2.style.display="block";
  smallBox2.style.display="none";
  bigBox3.style.display="none";
  smallBox3.style.display="block";
  bigBox2.style.animation="fadein 1.5s,float 3s ease-in-out infinite";
  // bigBox2.style.animation="float 3s ease-in-out infinite"
  smallBox1.style.animation="float 4s ease-in-out infinite"
  smallBox3.style.animation="float 2.5s ease-in-out infinite"

  
  
});

//write code for other small boxes
smallBox1.addEventListener("click", function(){
  bigBox1.style.display="block";
  smallBox1.style.display="none";
  bigBox2.style.display="none";
  smallBox2.style.display="block";
  bigBox3.style.display="none";
  smallBox3.style.display="block";
  bigBox1.style.animation="fadein 1.5s,float 3s ease-in-out infinite";
  // bigBox1.style.animation="float 3s ease-in-out infinite"
  smallBox2.style.animation="float 4s ease-in-out infinite"
  smallBox3.style.animation="float 2.5s ease-in-out infinite"

})

smallBox3.addEventListener("click", function(){
  bigBox1.style.display="none";
  smallBox1.style.display="block";
  bigBox2.style.display="none";
  smallBox2.style.display="block";
  bigBox3.style.display="block";
  smallBox3.style.display="none";
  bigBox3.style.animation="fadein 1.5s,float 3s ease-in-out infinite";
  // bigBox3.style.animation="float 3s ease-in-out infinite"
  smallBox1.style.animation="float 4s ease-in-out infinite"
  smallBox2.style.animation="float 2.5s ease-in-out infinite"

})
var topBar=document.getElementById("topBar");
window.onload=()=>{
  bigBox1.style.animation="fadein 1.5s";
  bigBox1.style.animation="float 3s ease-in-out infinite"
  smallBox2.style.animation="float 4s ease-in-out infinite"
  smallBox3.style.animation="float 3.6s ease-in-out infinite"
  topBar.style.animation="float 5s ease-in-out infinite"
}


var b1=document.getElementById("b1");
var rm=document.getElementById("rm");
var r1=document.getElementById("r1");
var r2=document.getElementById("r2");
var r3=document.getElementById("r3");
var b3=document.getElementById("b3");
var b2=document.getElementById("b2");

b1.addEventListener('click',()=>{
  rm.style.display="none";
  r1.style.display="block";
  r1.style.animation="fadein 1s"
})

b3.addEventListener("click",()=>{
  rm.style.display="none";
  r3.style.display="block";
  r3.style.animation="fadein 1s"
})

b2.addEventListener("click",()=>{
  rm.style.display="none";
  r2.style.display="block";
  r2.style.animation="fadein 1s"
})

var bk1=document.getElementById("bk1");
var bk2=document.getElementById("bk2");
var bk3=document.getElementById("bk3")

bk1.addEventListener('click',()=>{
  rm.style.display="flex";
  r1.style.display="none";
  rm.style.animation="fadein 0.8s"
  rm.style.padding='0'
})

bk2.addEventListener("click",()=>{
  rm.style.display="flex";
  r2.style.display="none";
  rm.style.animation="fadein 0.8s"
  rm.style.padding='0'
})

bk3.addEventListener("click",()=>{
  rm.style.display="flex";
  r3.style.display="none";
  rm.style.animation="fadein 0.8s"
  rm.style.padding='0'
})

const mobileBreakpoint = 768;

    function scrollUp() {
      if (window.innerWidth <= mobileBreakpoint) {
        window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
      }
    }

    function scrollDown() {
      if (window.innerWidth <= mobileBreakpoint) {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }