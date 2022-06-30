import './index.css';
import Clock from 'react-clock'
import React, { useState } from 'react'
import './Clock.css'
import Test from './components/Test'
import Digital from './components/Digital'

function App() {
  const [value, setValue] = useState(new Date())
  let myDate
  setInterval(() => {
    myDate = new Date()
    setValue(myDate)
    // console.log(myDate)
  }, 1000)

  return (
    <div id='clockDisplay'>
      <Clock id='myClock' value={value} style='position: absolute;'/>
      <Digital/>
      <Clock id='myClock' value={value}/>
    </div>
  );
}  

export default App