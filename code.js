let red = document.getElementById("Red");
let green = document.getElementById("Green");
let blue = document.getElementById("Blue");

let result = document.getElementById("Result");
let button = document.getElementById("Button");

button.addEventListener('click', () =>{
    let rCode = red.value.slice(0,2).toString(16);
    let gCode = green.value.slice(0,2).toString(16);
    let bCode = blue.value.slice(0,2).toString(16);
    result.innerHTML = `#${Math.ceil(rCode)}${Math.ceil(gCode)}${Math.ceil(bCode)}`;
})