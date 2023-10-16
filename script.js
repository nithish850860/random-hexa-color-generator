let color = document.getElementById("color");
let code = document.getElementById("code");
const btn = document.getElementById("btn");
let body = document.getElementsByTagName("body");

btn.addEventListener("click",()=>{
    let colors = Math.floor(Math.random() * 0xffffff).toString(16) ;
    color.style.background = `#${colors}` ;
    code.innerHTML = "#" + colors ;
})