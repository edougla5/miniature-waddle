//good code is simple and well commentedvim 

//declaring new date object with 2 variables hours and minutes
//base clock that changes degree of hands based on different timezones

document.body.style.display = 'none'
document.getElementById('searchBar')

let hourChange = document.getElementById('hourHand')
let minuteChange = document.getElementById('minuteHand')
let secondChange = document.getElementById('secondHand')

let day

let timeDiff = 0

function newAlarm() {
    alert('make new alarm?')
}

// let d = document.getElementsByClassName('tic')
// let cln = d[0].cloneNode(true)
// document.getElementById('tics').appendChild(cln)

// d[1].style.backgroundColor = 'teal'
// d[1].style.transform = 'rotate(' + 60 + 'deg)'
// d[1].style.backgroundColor = 'cyan'
// d[1].style.marginLeft = '150px'

// reseting hours and minutes every second
// setInterval function uses miliseconds

setInterval (function() {

    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()
    let today = currentTime.getDate()
    let month = currentTime.getMonth()

    let dayTitle = document.getElementById('dayLabel')
    let monthTitle = document.getElementById('monthLabel')

    let searching

    console.log(hours+timeDiff)

    if(hours+timeDiff>11) {
        day = false
        if(hours+timeDiff>12)
        hours-=12
    } else {
        day = true
    }
    
    if(day) {
        document.getElementById('am/pm').innerHTML = 'am'
    } else
        document.getElementById('am/pm').innerHTML = 'pm'
    
    document.getElementById('hours').innerHTML = hours + timeDiff
    document.getElementById('minutes').innerHTML = minutes
    
    minutes*=6
    hours*=30
    
    hours-=90
    minutes-=180
    
    hours = hours +(timeDiff*30)
    
    let s = seconds*6
    s -= 90
    hourChange.style.transform = 'rotate(' + hours + 'deg)'
    minuteChange.style.transform = 'rotate(' + minutes + 'deg)'
    secondChange.style.transform = 'rotate(' + s + 'deg)'

    document.body.style.display = 'block'

    dayTitle.innerHTML  = today
    if(month == 0)
        monthTitle.innerHTML = 'january'
    else if(month == 1)
        monthTitle.innerHTML = 'february'
    else if(month == 2)
        monthTitle.innerHTML = 'march'
    else if(month == 3)
        monthTitle.innerHTML = 'april'
    else if(month == 4)
        monthTitle.innerHTML = 'may'
    else if(month == 5)
        monthTitle.innerHTML = 'june'
    else if(month == 6)
        monthTitle.innerHTML = 'july'
    else if(month == 7)
        monthTitle.innerHTML = 'august'
    else if(month == 8)
        monthTitle.innerHTML = 'september'
    else if(month == 9)
        monthTitle.innerHTML = 'october'
    else if(month == 10)
        monthTitle.innerHTML = 'november'
    else if(month == 11)
        monthTitle.innerHTML = 'december'

}, 1000)

    let count = 30
    for(let j=1;j<13;j++) {
        let markRep = document.getElementsByClassName('tic')
        let cln = markRep[0].cloneNode(true)
        document.getElementById('tics').appendChild(cln)
        markRep[j].style.transform = 'rotate(' + count + 'deg)'
        count+=30
    }

// hands should be accurate. use ratios of a circle
// use clickable buttons instead of search box. more efficient unless import library

let atl = document.getElementById('atlLabel')
let tokyo = document.getElementById('tokyoLabel')
let anchorage = document.getElementById('anchorageLabel')
let hongKong = document.getElementById('hongKongLabel')
let paris = document.getElementById('parisLabel')
let sydney = document.getElementById('sydneyLabel')
let moscow = document.getElementById('moscowLabel')
let mumbai = document.getElementById('mumbaiLabel')

document.getElementById('searchBar').addEventListener('keydown' , function(e) {
    // e.preventDefault()
    if (e.keyCode = 13) {
        searchAtl()
    }
})

function searchAtl() {

    searching = document.getElementById('searchBar').value

    if(searching == 'atlanta') {
        timeDiff = 0
        atl.style.display = 'block'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
        document.getElementById('searchBar').value = ''
    } else if(searching == 'tokyo') {
        timeDiff = 1
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'block'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
        document.getElementById('searchBar').value = ''
    } else if(searching == 'anchorage') {
        timeDiff = 6
        atl.style.display = 'none'
        anchorage.style.display = 'block'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
        document.getElementById('searchBar').value = ''
    } else if(searching == 'hong kong')  {
        timeDiff = 0
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
        document.getElementById('searchBar').value = ''
    } else if(searching == 'paris')  {
        timeDiff = 6
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'block'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
        document.getElementById('searchBar').value = ''
    } else if(searching == 'tokyo') {
        timeDiff = 1
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'block'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
        document.getElementById('searchBar').value = ''
    } else if(searching == 'sanfransisco')  {
        timeDiff = 3
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'block'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
        paris.style.display = 'none'
        document.getElementById('searchBar').value = ''
    } else if(searching == 'moscow')  {
        timeDiff = 7
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'block'
        mumbai.style.display = 'none'
        document.getElementById('searchBar').value = ''
    } else if(searching == 'mumbai')  {
        timeDiff = -2
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'block'
        document.getElementById('searchBar').value = ''
    }
}

function atlantaTime() {
    timeDiff = 0
        atl.style.display = 'block'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
}

function tokyoTime() {
    timeDiff = 1
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'block'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
}

function anchorageTime() {
    timeDiff = 6
        atl.style.display = 'none'
        anchorage.style.display = 'block'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
}

function hongKongTime() {
    timeDiff = 0
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'block'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
}

function parisTime() {
    timeDiff = 6
    atl.style.display = 'none'
    anchorage.style.display = 'none'
    hongKong.style.display = 'none'
    tokyo.style.display = 'none'
    paris.style.display = 'block'
    sydney.style.display = 'none'
    moscow.style.display = 'none'
    mumbai.style.display = 'none'
}

function sydneyTime() {
    timeDiff = 3
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'block'
        moscow.style.display = 'none'
        mumbai.style.display = 'none'
}

function moscowTime() {
    timeDiff = 7
    atl.style.display = 'none'
    anchorage.style.display = 'none'
    hongKong.style.display = 'none'
    tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'block'
        mumbai.style.display = 'none'
}
    
 function mumbaiTime() {
        timeDiff = -2
        atl.style.display = 'none'
        anchorage.style.display = 'none'
        hongKong.style.display = 'none'
        tokyo.style.display = 'none'
        paris.style.display = 'none'
        sydney.style.display = 'none'
        moscow.style.display = 'none'
        mumbai.style.display = 'block'
}