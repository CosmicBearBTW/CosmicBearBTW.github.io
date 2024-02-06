const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

const ball = { x: canvas.width / 2, y: canvas.height - 30, radius: 10, speed: 2, dx: 2, dy: 2 };
const paddleWidth = 75, paddleHeight = 10, paddleDiff = 25;
let paddleX = (canvas.width - paddleWidth) / 2;

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ballMove();
    ballDraw();
    paddleDraw();
    requestAnimationFrame(animate);
}

function ballMove() {
    ball.x += ball.dx;
    ball.y += ball.dy;
    if (ball.y + ball.radius > canvas.height) {
        ball.dy *= -1;
    }
    if (ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }
    if (ball.x + ball.radius > canvas.width) {
        ball.dx *= -1;
    }
    if (ball.x - ball.radius < 0) {
        ball.dx *= -1;
    }
    if (ball.x + ball.radius > paddleX && ball.y + ball.radius > canvas.height - paddleHeight - 5 && ball.y - ball.radius < paddleHeight + 5) {
        ball.dy *= -1;
    }
}

function ballDraw() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fillStyle = 'white';
    context.fill();
    context.closePath();
}

function paddleDraw() {
    context.fillStyle = 'white';
    context.fillRect(paddleX, canvas.height - paddleHeight - 5, paddleWidth, paddleHeight);
}

animate();
