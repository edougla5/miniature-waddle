const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let rectColor = 'rgb(0,300,100)'
ctx.canvas.width = window.innerWidth-30
ctx.canvas.height = window.innerHeight-25
let died = document.getElementById('gameOver')
let myButton = document.getElementById('continue')
let myScore = document.getElementById('score')
let scoreLabel=document.getElementById('scoreTitle')
let gameStart = document.getElementById('startButton')
let dead = false
let a = canvas.width/2
let b = canvas.height-100
let x = 100
let y = 10
let f = 300
let d = 500
let upDown = 2
let leftRight = 2
let ballRad = 10
let numBricks = 5
let realScore = 0

let gBricks = []

document.querySelector('body').style.backgroundColor = 'black'

function game() {
    myScore.style.display = 'block'
    scoreLabel.style.display='block'
    numBricks = Math.floor(canvas.width/100)
    let spaceBefore = (canvas.width-numBricks*80-20)/2
    
    for(let w=0;w<10;w++) {
        gBricks.push([])
        for(let v=0;v<numBricks;v++) {
            gBricks[w].push(true)
        }
    }

    myScore.innerHTML = '0'
    let myFunc = setInterval(function() {
    died.style.display = 'none'
    myButton.style.display = 'none'
    gameStart.style.display = 'none'

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.rect(a, b, x, y)
    ctx.fillStyle = rectColor
    ctx.fill()
    ctx.closePath()
    
    ctx.beginPath()
    // ctx.rect(f,d,15,15)
    ctx.arc(f, d, ballRad, Math.PI * 2, 0)
    ctx.fillStyle = 'darkRed'
    ctx.fill()
    ctx.closePath()

    let g = spaceBefore
    let h = 50
    let color = 100

    for (let i=0;i<6;i++) {
        for(let q=0;q<numBricks;q++) {
            if(gBricks[i][q]) {
                ctx.beginPath()
                ctx.rect(g, h, 60, 10)
                ctx.fillStyle = 'rgb(' + color + ',50,0)'
                ctx.fill()
                ctx.closePath()
            }
            // brick encounter
            if (d-ballRad<h+10 && d+ballRad>h && f>=g && f<=g+60 && gBricks[i][q]) {
                gBricks[i][q] = false
                upDown *= -1
                realScore++
                myScore.innerHTML = realScore
            }
            if(d+ballRad>h && d-ballRad<h && f>g && f<g+60 && gBricks[i][q]) {
                gBricks[i][q] = false
                upDown *= -1
                realScore++
                myScore.innerHTML = realScore
            }
            // ball collision brick from left side
            if(f+ballRad>g && f+ballRad<g+3 && d+ballRad>h && d-ballRad<(h+10) && gBricks[i][q]) {
                gBricks[i][q] = false
                leftRight *= -1
                realScore++
                myScore.innerHTML = realScore
            }
            // collision from right
            if(f-ballRad<g+10 && f-ballRad>g+10-3 && d+ballRad>h && d-ballRad<(h+10) && gBricks[i][q]) {
                gBricks[i][q] = false
                leftRight *= -1
                realScore++
                myScore.innerHTML = realScore
            }
            g+=80
        }
        // g(starting horizontal of box) h(starting vertical of each box)
        h+=40
        g=spaceBefore
        color +=50
    }

    
    f -= leftRight
    d -= upDown
    // canvas rect = (startX, startY, endX, endY)
    // if (f+ballRad>a && f-ballRad<a+x && (d+ballRad) > b) {
    if((f+ballRad)>a+5 && (f-ballRad)<a+x-5 && (d+ballRad) > b && (d-ballRad < b+y)) {
        upDown *= -1
    }
    if (f>a && f<a+5 && d+ballRad>b && d-ballRad<b-y) {
        leftRight *= -1
    }
    if (f<a+x && f>a+x-3 && d+ballRad>b && d-ballRad<b-y) {
        leftRight *= -1
    }
    else if (f+ballRad > canvas.width) {
        leftRight *= -1
    } else if (f-ballRad < 0) {
        leftRight *= -1
    } else if (d-ballRad < 0) {
        upDown *= -1
    } else if (d>canvas.height) {
        died.style.display = 'block'
        myButton.style.display = 'block'
        x = 100
        y = 10
        f = 300
        d = 300
        clearInterval(myFunc)
        for(let w=0;w<10;w++) {
            gBricks[w] = [true,true,true,true,true,true,true,true]
        }
        realScore = 0
    }
},10)
}

let dragEnd
let dragStart
let canMove = false

canvas.addEventListener('mouseup',up)
canvas.addEventListener('mousedown',down)
canvas.addEventListener('mousemove', move)

canvas.addEventListener('touchstart', touching)
canvas.addEventListener('touchmove', moving)
canvas.addEventListener('touchend', notTouching)

function down(e) {
    canMove = true
}

function move(f) {
    if (canMove && f.x) {
        a = f.offsetX - x / 2
    }
}

function up(e) {
    canMove = false
}

function touching(e) {
    canMove = true
}

function moving(f) {
    if (canMove) {
        a = f.touches[0].clientX - x / 2
    }
}

function notTouching(e) {
    canMove = false
}