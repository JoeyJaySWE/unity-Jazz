const canvas = document.querySelector("canvas");

const context = canvas.getContext('2d');

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

context.fillStyle = '#dd3f18';

context.fillRect(window.innerWidth/3, 200, 100, 100);