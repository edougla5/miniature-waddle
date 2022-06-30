import React, { useState } from "react";
import "../../src/index.css";

const Test = () => {
  
  let test = e => {
    e.preventDefault()
    let var1=document.getElementById('myInput').value
    document.getElementById('displayText').innerText=var1
  }

  let resize = () => {
    let myWidth=document.getElementById('box')
    console.log(myWidth.style.width)
  }

  let changeColor = () => {
    let temp = document.getElementById('displayText1')
    let name=document.getElementById('name')
    temp.innerHTML += document.getElementById('email').value
  }

  return (
    <div>
      <h1 className="title">New new Application</h1>
      <form onSubmit={test}>
        <div id="testText">test text</div>
        <div id="box">
          <div id='inputContainer'>
          <input id="email" type="text" placeholder="email"></input>
          <input id="myInput" type="text" placeholder="name"></input>
          <input id="phone" type="text" placeholder="phone number"></input>
          <button id='myButton' onClick={changeColor} type='button'>button</button>
          <button id='resize' onClick={resize} type='button'>resize</button>
          <div id="displayText1"></div>
          <div id="displayText2"></div>
          <div id="displayText3"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Test;