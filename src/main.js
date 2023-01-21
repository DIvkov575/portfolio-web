const floatingImg = document.getElementById("floatingElem");
console.log(screen.width);
let prev_x = 0;
let prev_y = 0;
let const_x = 0.5;
let const_y = 0.5;
let bound = screen.width + 10;
function animate() {
    if (prev_x == bound || prev_x == -15) {
        const_x = -const_x;
    }
    prev_x += const_x;
    prev_y += const_y;
    floatingImg.style.left = prev_x.toString() + "px";
    setTimeout(() => { animate(); }, 50);
}
animate();
//# sourceMappingURL=main.js.map
