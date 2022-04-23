const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

// this next function generates a random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    return num
}

function Ball(x,y, velX, velY, color, size) {
    this.x = x
    this.y = y
    this.velX = velX
    this.velY = velY
    this.color = color
    this.size = size
}

Ball.prototype.draw = function() {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
}

Ball.prototype.update = function() {
    if (this.x >= width-12) {
        this.velX *= -1
    }

    if (this.x <= 12) {
        this.velX *= -1
    }

    if (this.y >= height-12) {
        this.velY *= -1
    }

    if (this.y <= 12) {
        this.velY *= -1
    }

    this.x += this.velX
    this.y += this.velY
}

Ball.prototype.collisionDetect = function() {
    for (let j =0; j< balls.length; j++) {
        if (!(this === balls[j])) {
            const dx = this.x - balls[j].x
            const dy = this.y - balls[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')'
            }
        }
    }
}

let balls = []

while (balls.length < 25) {
    let size = random(7,11)
    let ball = new Ball(
        // position always drawn 1 ball width
        // away from canvas edges avoid errors
        random(0 + size,width-size),
        random(0 + size,height - size),
        random(-4,4),
        random(-4,4),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
        size
    )
    balls.push(ball)
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'
    ctx.fillRect(0, 0, width, height)

    for (let i =0; i < balls.length; i++) {
        balls[i].draw()
        balls[i].update()
        balls[i].collisionDetect()
    }
    requestAnimationFrame(loop)
}

loop()
