import React from 'react'
import '../../src/index.css'

let Digital = () => {
    let myDate = new Date()

    return(
        <div id='dLabel'>{myDate.getDay()}</div>
    )
}

export default Digital