const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

const ball = { x: canvas.width / 2, y: canvas.height / 2, radius: 10, speed: 2, dx: 2, dy: 2 };
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
    if (ball.x + ball.radius > paddleX && ball.y + ball.radius > canvas
    context.arc(ball)
