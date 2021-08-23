const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

let isDrawing = false;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let lastX = 0;
let lastY = 0;

const draw = e => {
  if (!isDrawing) return;
  console.log(e);
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => (isDrawing = true));
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
