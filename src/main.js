var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const floatingImg = document.getElementById("floatingElem");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const myFunct = () => __awaiter(this, void 0, void 0, function* () {
    while (true) {
        sleep(1000).then(() => { console.log("asd"); });
    }
});
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
//# sourceMappingURL=main.js.map