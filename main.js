let mouseEvent = 'empty';
let lastPositonX, lastPositonY;
let radio;


canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
Color = 'black';
WidthOfLine = 1;
canvas.addEventListener('mousedown', my_mousedown);
function my_mousedown(e) {
Color = document.getElementById('Color').value;
WidthOfLine = document.getElementById('WidthOfLine').value;
radio = document.getElementById('radio').value;
mouseEvent = 'mousedown';
}

canvas.addEventListener('mousemove', my_mousemove);

function my_mousemove(e) {
current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
current_position_of_mouse_y = e.clientY-canvas.offsetTop;
if(mouseEvent=='mousedown') {
    ctx.beginPath();
    ctx.strokeStyle=Color;
ctx.lineWidth=WidthOfLine;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radio, 0 , 2 * Math.PI);
ctx.stroke()
console.log('Ultima posicion de X y Y = ');
console.log('X = '+ lastPositonX+'Y = '+ lastPositonY);
ctx.moveTo(lastPositonX, lastPositonY);
console.log('Actual posicion de X y Y = ');
console.log('X = '+ current_position_of_mouse_x+'Y = '+ current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
}
lastPositonX = current_position_of_mouse_x;
lastPositonY = current_position_of_mouse_y;
}

canvas.addEventListener('mouseup', my_mouseup);

function my_mouseup(e) {
MouseEvent = 'mouseUp';
}

canvas.addEventListener('mouseleave', my_mouseleave);

function my_mouseleave() {
MouseEvent = 'mouseleave';
}

function ClearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}



