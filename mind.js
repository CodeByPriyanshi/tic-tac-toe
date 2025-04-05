
let display = document.getElementById('screen');
function keyfun(val){
    display.innerText += val;
}

function cal(){
    let result = eval(display.innerText);
    display.innerText = result;
}