let allMonths = document.getElementsByClassName("box");
let day29 = document.getElementById("box29");
let day30 = document.getElementById("box30");
let day31 = document.getElementById("box31");

// let firstEvent = document.getElementById('event1')
// let secondEvent = document.getElementById('event2')
// let thirdEvent = document.getElementById('event3')

let today = new Date();
let month = today.getMonth();
let changeMonth = document.getElementById("month");

//document.getElementById('date').innerHTML = today.getDay()

function monthCheck() {
  if (month == 0) {
    document.body.style.backgroundColor = "orangeRed";
    day29.style.display = "inline-grid";
    day30.style.display = "inline-grid";
    day31.style.display = "inline-grid";
    return "january";
  } else if (month == 1) {
    document.body.style.backgroundColor = "green";
    day29.style.display = "none";
    day30.style.display = "none";
    day31.style.display = "none";
    return "february";
  } else if (month == 2) {
    document.body.style.backgroundColor = "orangeRed";
    day29.style.display = "inline-grid";
    day30.style.display = "inline-grid";
    day31.style.display = "block";
    return "march";
  } else if (month == 3) {
    document.body.style.backgroundColor = "green";
    day29.style.display = "inline-grid";
    day30.style.display = "inline-grid";
    day31.style.display = "none";
    return "april";
  } else if (month == 4) {
    document.body.style.backgroundColor = "orangeRed";
    day29.style.display = "inline-grid";
    day30.style.display = "inline-grid";
    day31.style.display = "inline-grid";
    return "may";
  } else if (month == 5) {
    document.body.style.backgroundColor = "green";
    day29.style.display = "inline-grid";
    day30.style.display = "inline-grid";
    day31.style.display = "none";
    return "june";
  } else if (month == 6) {
    document.body.style.backgroundColor = "orangeRed";
    day29.style.display = "inline-grid";
    day30.style.display = "inline-grid";
    day31.style.display = "inline-grid";
    return "july";
  } else if (month == 7) {
    document.body.style.backgroundColor = "green";
    day29.style.display = "inline-grid";
    day30.style.display = "inline-grid";
    day31.style.display = "none";
    return "august";
  } else if (month == 8) {
    document.body.style.backgroundColor = "orangeRed";
    return "september";
  } else if (month == 9) {
    document.body.style.backgroundColor = "green";
    return "october";
  } else if (month == 10) {
    document.body.style.backgroundColor = "orangeRed";
    return "november";
  } else if (month == 11) {
    document.body.style.backgroundColor = "green";
    return "december";
  }
}

changeMonth.innerHTML = monthCheck();
let year = document.getElementById("year");
let yearNum = today.getFullYear();
year.innerHTML = yearNum;

let extraDays = document.getElementsByClassName("boxes");
let emptyDay = document.createElement("div");
emptyDay.className = "box";
emptyDay.innerHTML = "<ul><li id='dayText'>none</li></ul>";
emptyDay.style.backgroundColor = "transparent";
emptyDay.style.borderColor = "transparent";
emptyDay.style.color = "transparent";
emptyDay.style.margin = "0 4px 0 7px";
emptyDay.style.cursor = "default";

console.log(extraDays[0]);
console.log(document.getElementById("removeEvent"));

let tempDay = new Date();
tempDay.setDate(1);
for (let x = 0; x < tempDay.getDay(); x++) {
  extraDays[0].prepend(emptyDay.cloneNode(true));
}

function forwardMonth() {
  month++;
  if (month == 12) {
    month = 0;
    yearNum++;
    year.innerHTML = yearNum;
  }
  changeMonth.innerHTML = monthCheck();
}

function backMonth() {
  month--;
  if (month == -1) {
    month = 11;
    yearNum--;
    year.innerHTML = yearNum;
  }
  changeMonth.innerHTML = monthCheck();
}

let currentDay = today.getDate();
let dayDisplay;
if (currentDay == 29) {
  day29.style.border = "solid red";
  day29.style.borderWidth = "thin";
} else if (currentDay == 30) {
  day30.style.border = "solid red";
  day29.style.borderWidth = "thin";
} else if (currentDay == 31) day31.style.border = "solid white";
else {
  allMonths[currentDay - 1 + tempDay.getDay()].style.backgroundColor = "white";
  allMonths[currentDay - 1 + tempDay.getDay()].style.color = "black";
  allMonths[currentDay - 1 + tempDay.getDay()].style.borderColor = "blue";
}

console.log("current day = " + currentDay);
console.log("temp day = " + tempDay.getDay());

let titleMonth = document.getElementById("title");
let eventsDisplay = document.getElementById("noEvents");
let firstEvent = document.getElementById("event1");
let secondEvent = document.getElementById("event2");
let thirdEvent = document.getElementById("event3");

// each index stores the day, mont, year and 3 event strings

let events = [];

let u = 0;
let numEvents = 0;
let abrv;
let dateSelected = false;

function checkDate(a) {
  u = a;
  dateSelected = true;
  if (a == 1 || a == 21 || a == 31) abrv = "st";
  else if (a == 2 || a == 22) abrv = "nd";
  else if (a == 3 || a == 23) abrv = "rd";
  else abrv = "th";
  titleMonth.innerHTML = "";
  titleMonth.innerHTML += monthCheck(month) + " " + a + abrv;
  if (!events[a]) eventsDisplay.style.display = "block";
  else {
    eventsDisplay.innerHTML = events[a];
  }
  events[u] = [];
}

/* if no event is in index 0 add event
 */

function addEvent() {
  let j = 0;

  if (dateSelected == false) {
    alert("please select a date");
    return 0;
  }

  //initializing empty array for that day

  if (events[u][j] == undefined) {
    events[u][j] = prompt("enter event information");
    firstEvent.innerHTML = events[u][j];
  } else if (events[u][j + 1] == undefined) {
    events[u][j + 1] = prompt("enter event information");
    secondEvent.innerHTML = events[u][j + 1];
  } else if (events[u][j + 2] == undefined) {
    events[u][j + 2] = prompt("enter events info");
    thirdEvent.innerHTML = events[u][j + 2];
  } else {
    alert("events are full! please remove one first");
  }

  eventsDisplay.style.display = "none";
  firstEvent.style.display = "block";
  secondEvent.style.display = "block";
  thirdEvent.style.display = "block";
  secondEvent.style.margin = "0, auto";
}

let forwardDay = () => {
  checkDate(dayDisplay);
};

function removeEvent() {
  if (
    events[u][0] == undefined &&
    events[u][1] == undefined &&
    events[u][2] == undefined
  ) {
    alert("no events to remove");
    return 0;
  }
  let del = prompt("what event would you like to remove?");
  if (del == 1) {
    events[u][0] = "";
    firstEvent.innerHTML = events[u][0];
  } else if (del == 2) events[u][1] = "";
  else if (del == 3) events[u][2] = "";
  if (
    events[u][0] == undefined ||
    (events[u][0] == "" && events[u][1] == "") ||
    (events[u][1] == undefined && events[u][2] == undefined) ||
    events[u][2] == ""
  ) {
    eventsDisplay.innerHTML = "no events";
    eventsDisplay.display = "block";
  }
}

function clearIt() {
  dateSelected = false;
  titleMonth.innerHTML = "";
  eventsDisplay.style.display = "none";
}

let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let modal2 = document.querySelector(".modal2");
let closeBtn = document.querySelector(".close-btn");
let openModal = (x) => {
  checkDate(x);
  dayDisplay = x;
  console.log("text");
  modal.style.display = "block";
}
closeBtn.onclick = function () {
  modal2.style.display = "block";
  modal.style.display = "none";
};
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// setInterval (function() {
//    let x = Math.random() * 100
//    x = x.toFixed(0)
//    if(x>50)
// console.log(x)/100
// },1000)

//functions for hover effect
//why does this event run w/o being called?

// function makeEvent(a) {
//     let boxText = prompt()
//     event1.innerHTML += boxText
// }
// js emulates objects via constructor functions
