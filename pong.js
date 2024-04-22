// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Define the ball's properties
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 2;
let ballSpeedY = -2;

// Define the paddles' properties
let paddle1Y = canvas.height / 2;
let paddle2Y = canvas.height / 2;
let paddleHeight = 100;
let paddleWidth = 10;

// Define game variables
let gameOver = false;
let player1Score = 0;
let player2Score = 0;
const winningScore = 3;

// Handle key presses
document.addEventListener('keydown', (event) => {
  if (event.key === 'w' && paddle1Y > 0) {
    paddle1Y -= 10;
  } else if (event.key === 's' && paddle1Y < canvas.height - paddleHeight) {
    paddle1Y += 10;
  }
});

// Update the game state and draw the game
function update() {
  if (!gameOver) {
    // Move the ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Check for ball collisions with the paddles
    if (
      ballY + 10 >= paddle1Y &&
      ballY - 10 <= paddle1Y + paddleHeight &&
      ballX <= paddleWidth
    ) {
      ballSpeedX = -ballSpeedX;
    } else if (
      ballY + 10 >= paddle2Y &&
      ballY - 10 <= paddle2Y + paddleHeight &&
      ballX >= canvas.width - paddleWidth
    ) {
      ballSpeedX = -ballSpeedX;
    }

    // Check for ball collisions with the top and bottom of the canvas
    if (ballY <= 0 || ballY >= canvas.height) {
      ballSpeedY = -ballSpeedY;
    }

    // Update the paddles' positions based on key presses
    paddle1Y = Math.min(
      Math.max(paddle1Y, 0),
      canvas.height - paddleHeight
    );

    // Check if the ball has gone out of bounds, update scores, and start a new game if necessary
    if (ballX <= 0) {
      player2Score++;
      if (player2Score >= winningScore) {
        gameOver = true;
      } else {
        resetBall();
      }
    } else if (ballX >= canvas.width) {
      player1Score++;
      if (player1Score >= winningScore) {
        gameOver = true;
      } else {
        resetBall();
      }
    }

    // Draw the game objects
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle1();
    drawPaddle2();
    drawBall();
    drawScore();
  }
}

// Reset the ball's position
function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = 2;
  ballSpeedY = -2;
}

// Draw the ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fillStyle
