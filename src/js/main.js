'use strict'
import '../css/style.css';
import '../index.html';

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 500;
canvas.height = 600;
let context = canvas.getContext('2d');
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

let drawColor = 'black';
let drawWidth = '2';
let isDrawing = false;

function changeColor(el) {
	drawColor = element.style.background;
}

canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);

canvas.addEventListener('touchend', stop, false);
canvas.addEventListener('mouseup', stop, false);
canvas.addEventListener('mouseout', stop, false);


function start(evt) {
	isDrawing = true;
	context.beginPath();
	context.moveTo(evt.clientX - canvas.offsetLeft,
		evt.clientY - canvas.offsetTop);
	evt.preventDefault();
}
function draw(evt) {
	if (isDrawing) {
		context.lineTo(evt.clientX - canvas.offsetLeft,
			evt.clientY - canvas.offsetTop);
		context.strokeStyle = drawColor;
		context.lineWidth = drawWidth;
		context.lineCap = 'round';
		context.lineJoin = 'round';
		context.stroke();
	}
}

function stop(evt) {
	if (isDrawing) {
		context.stroke();
		context.closePath();
		isDrawing = false;
	}
	evt.preventDefault();
}




console.log('from main.js');
