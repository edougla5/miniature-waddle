/* ideas
    2 functions. one handles operators,
    the other handles number input
    there are 5 operators. +, -, *, /, and =
    numbers should go to the display
    maximum number of chars on screen is 8 (numbers of operators)
*/

let bPlus = document.getElementById('add')
let bMinus = document.getElementById('subtract')
let bMult = document.getElementById('multiply')
let bDiv = document.getElementById('divide')

let plus = false
let minus = false
let multiply = false
let divide = false
let subtract = false
let equals = false
let ac = false

let blink = (e) => {
    document.getElementById(e).style.backgroundColor = 'black'
    setTimeout(() => {
        document.getElementById(e).style.backgroundColor = 'white'
    }, 100);
}

let reset = true

let screen = document.getElementById('innerText')

// tracking for number being calculated
let numTot = 0

function operator(value) {
    if (value == 'ac') {
        screen.innerHTML = '0'
        reset=true
        numTot = 0
    } else if (value == 'plus' && !minus && !divide && !multiply && !plus) {
        plus=true
        bPlus.style.backgroundColor = 'black' 
        screen.innerHTML+='+'
    } else if (value == 'divide' && !minus && !multiply && !divide && !plus) {
        divide = true
        screen.innerHTML+='/'
        console.log('divide')
    }
    else if (value == 'subtract' && !divide && !multiply && !plus && !minus) {
        minus=true
        screen.innerHTML+='-'
    } else if (value == 'multiply') {
        multiply = true
        bMult.style.backgroundColor = 'black'
        screen.innerHTML+='X'
    } else if (value == 'equals') {
        screen.innerHTML = numTot
        equals=true
    }
}

//if 0, let screen = number
function number(num) {
    if(screen.innerHTML == 0 || equals) {
        numTot = num
        screen.innerHTML = num
        equals = false
    } else {
            if(minus) {
            numTot-=num
            minus=false
        } else if(divide) {
            numTot/=num
            divide=false
        } else if(multiply) {
            numTot*=num
            multiply=false
        }  else if(plus) {
            numTot += num
            plus=false
        } else {
            numTot = parseInt(num+screen.innerHTML)
    }
    screen.innerHTML+=num
}

    bMult.style.backgroundColor = 'white'
    bMinus.style.backgroundColor = 'white'
    bDiv.style.backgroundColor = 'white'
    bPlus.style.backgroundColor = 'white'

    bMult.style.color = 'black'
    bMinus.style.color = 'black'
    bDiv.style.color = 'black'
    bPlus.style.color = 'black'
}