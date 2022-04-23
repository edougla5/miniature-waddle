import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Books from './components/Books'

type Book = {
  title: string
  image: string
  author: string
}

const App: React.FC = () => {

  const [books, setBooks] = useState<Book[]>([]);
  const [tempBooks, setTempBooks] = useState<Book[]>([])

  return (
    <div className='App'>
      <Header books={books} setBooks={setTempBooks} />
      <Books books={tempBooks} setBooks={setBooks} setTempBooks={setTempBooks} />
    </div>
  )
}

export default App;