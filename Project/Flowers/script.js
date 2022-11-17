const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let number = 5;
let scale = 10;

function drawFlower() {
    let angle = number * 2;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width / 2;
    let positionY = radius * Math.cos(angle) + canvas.height / 2;

    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
}

function animate() {
    // draaw each frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawFlower();
    requestAnimationFrame(animate);
}

animate();