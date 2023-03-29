//initial data
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;
let rValue = '';

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let range = document.querySelector('.range');

//events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click',colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click',clearScreen)
icone.forEach((item)=>{
    item.addEventListener('click', selectPicel);
})


//Functions
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}
function mouseDownEvent(e){
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e){
    if(canDraw) {
        draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent(){
    canDraw =  false;
}

function draw(x,y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;
    let rValue = range.value;

    ctx.beginPath();
    ctx.lineWidth = rValue;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

function rangeValue(){
    let rValue = range.value;
    document.querySelector('.value-range').innerHTML = rValue;
}