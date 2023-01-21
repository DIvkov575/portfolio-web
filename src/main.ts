const floatingImg = document.getElementById("floatingElem");
const body = document.querySelector('body');

let prev_x = 0;
let prev_y = 0;
let const_x = 0.5;
let const_y = 0.5;


let bound_x = window.innerWidth;
let bound_y = window.innerHeight;
console.log(bound_y)

function animate(){
  if ((prev_x >= bound_x-20) || (prev_x <= -5)) {
    // const_x *= ((Math.random()%75)+75)/100
    const_x = -const_x; 
    prev_x += const_x;
  }
  if ((prev_y >= bound_y-20) || (prev_y <= -5)) {
    // const_y *= ((Math.random()%75)+75)/100
    const_y = -const_y; 
    prev_y += const_y;
  }

  floatingImg.style.left = prev_x.toString()+"px";
  floatingImg.style.top = prev_y.toString()+"px";

  prev_x += const_x;
  prev_y += const_y;

  setTimeout(()=>{animate()}, 10);
}
animate()
