
const canves = document.querySelector("canvas"),
size = document.querySelector("#size"),
color = document.querySelector("#color"),

//bgColor = document.querySelector("#bg"),

clear = document.querySelector("#clear"),
save = document.querySelector("#save"),


ctx = canvas.getContext('2d');


let isDrawing = false
brushWidth = 1;

window.addEventListener("load",()=> {
    canves.width = canves.offsetWidth;
    canves.height = canves.offsetHeight;

});

const drawing = (e) => {

    if(!isDrawing)return;
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.strokeStyle = color.value;
    ctx.lineWidth = brushWidth;
    ctx.stroke();

}

const StartDraw = () =>{
    isDrawing = true;
    ctx.beginPath();
}

save.addEventListener("click", () => {

    const link = document.createElement("a");
    link.download = Date.now();
    link.href = canves.toDataURL();
    link.click();

});


clear.addEventListener("click", () => {
    ctx.clearRect(0,0,canves.width,canves.height);


});

size.addEventListener("change",() => brushWidth = size.value);
canves.addEventListener("mousedown", StartDraw);
canves.addEventListener("mouseup", () => isDrawing = false);
canves.addEventListener("mousemove", drawing);