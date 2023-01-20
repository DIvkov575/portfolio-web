const floatingImg = document.getElementById("floatingElem");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const myFunct = async() => {
  while (true) {
    sleep(1000).then(()=>{console.log("asd")});
  }
}
myFunct();
// const myFunc = async () => {
//   setTimeout(()=>{
//     floatingImg.style.top += 0.5;
//   }, 1000);
// }
// const exec =  {
// }

// while (true){
  // exec()
// }
// setTimeout(()=>{console.log("heelo")}, 10000);

