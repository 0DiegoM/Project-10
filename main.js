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
var lastPositonTouchX, lastPositonTouchY;

var width = screen.width;

new_width =  screen.width - 70; 
new_height = screen.height - 300;
	if(width < 992)
	{
	document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
	}
	canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
	console.log("my_touchstart");
  //Actividad adicional
  Color = document.getElementById("Color").value;
  WidthOfLine = document.getElementById("WidthOfLine").value;
  //Final de la actividad adicional
         
    lastPositonTouchY = e.touches[0].clientX - canvas.offsetLeft;
    lastPositonTouchX = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener('touchmove', my_touchmove);

function my_touchmove(e) {
    currentPositonTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositonTouchY = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = Color;
ctx.lineWidth = WidthOfLine;
ctx.moveTo(lastPositonTouchX, lastPositonTouchY);
ctx.lineTo(currentPositonTouchX, currentPositonTouchY);
ctx.stroke()

lastPositonTouchX = currentPositonTouchX;
lastPositonTouchY = currentPositonTouchY;
}

