let snake = [];
snake.push([240, 240]);
snake.push([0, 0]);
snake.push([0, 0]);

let canvas = document.getElementById('canvas');

let speedx = 1;
let speedy = 0;
let speed = 5;

function draw() {
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'rgb(0, 255, 0)';
        // console.log(snake[i][0], snake[i][1]);
        ctx.fillRect(snake[i][0], snake[i][1], 10, 10);
    }
}

function move() {
    // console.log(snake);
    for (let q = snake.length - 1; q >= 0; q--) {
        if (q == 0) {
            snake[q][0] += speedx * speed;
            snake[q][1] += speedy * speed;
        }
        else {
            snake[q][0] = snake[q-1][0];
            snake[q][1] = snake[q-1][1];
        }
    }
}

function play(e) {
    if (e.key == "w") {
        if (speedy == 0) {
            speedx = 0;
            speedy = -1;
        }
    }
    if (e.key == "s") {
        if (speedy == 0) {
            speedx = 0;
            speedy = 1;
        }
    }
    if (e.key == "a") {
        if (speedx == 0) {
            speedx = -1;
            speedy = 0;
        }
    }
    if (e.key == "d") {
        if (speedx == 0) {
            speedx = 1;
            speedy = 0;
        }
    }
}

function update() {
    move();
    draw();
}

setInterval(update, 10);


addEventListener("keydown", play);