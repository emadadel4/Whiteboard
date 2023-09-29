var canves = document.getElementById("canvas");

canves.width = window.innerWidth;
canves.height = window.innerHeight;

var ctx = canvas.getContext('2d');
var drawing = false;

function getThing()
{
    var color = document.getElementById('color').value;
    var size = document.getElementById('size').value;

    return {
        color,
        size
    }
}

function StartDraw(){

    drawing = true;

}

function StopDraw(){

    drawing = false;
    ctx.beginPath();

}

function Draw(e){

    if(!drawing) return;
    ctx.strokeStyle = "red";
    ctx.lineWidth = "10";
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX,e.clientY);
    ctx.moveTo(e.clientX,e.clientY);
    ctx.stroke();

}

function clearAll()
{
    console.log("Clear");
}

canves.addEventListener("mousedown", StartDraw);
canves.addEventListener("mouseup", StopDraw);
canves.addEventListener("mousemove", Draw);