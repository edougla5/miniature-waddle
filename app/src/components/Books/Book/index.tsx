import React from 'react'
import './style.css'


type Props = {
    title: string
    author: string
    image: string
}

type Book = {
    title: string
    image: string
    author: string
  }

  
const Book: React.FC<Props> = props => {
    return <div className='book'>
        <h2>{props.title}</h2>
        <img src={props.image} />
        <h3>{props.author}</h3>

    </div>
}

export default Book