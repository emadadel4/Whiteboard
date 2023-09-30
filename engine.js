
const canves = document.querySelector("canvas"),
size = document.querySelector("#size"),
color = document.querySelector("#color"),


ctx = canvas.getContext('2d');


let isDrawing = false
brushWidth = 1;

function getThing()
{
    var color = document.getElementById('color').value;
    var size = document.getElementById('size').value;

    return {
        color,
        size
    }
}

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


size.addEventListener("change",() => brushWidth = size.value);
canves.addEventListener("mousedown", StartDraw);
canves.addEventListener("mouseup", () => isDrawing = false);
canves.addEventListener("mousemove", drawing);