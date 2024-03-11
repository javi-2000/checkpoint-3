import { useEffect, useState } from 'react'
import './App.css'
import BookForm from './server/BookForm'
import BookTable from './server/BookTable'


export default function App() {

  const [books, setBooks] = useState([])

  async function getBooks () {
    const response = await fetch('http://localhost:3000/books')
    const data = await response.json()
    setBooks(data)
  }

  useEffect(()=>{
    getBooks ()
  }, [])

  async function addBook (book) {
    await fetch('http://localhost:3000/books', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book)
    })
    getBooks()
  }


 async function deleteBook ( bookID) {
    await fetch(`http://localhost:3000/books/${bookID}`, {
      method: 'DELETE',
 })
    getBooks()
  }


  return (
    <>
      <BookForm addBook={addBook}/>
      <BookTable onDelete={deleteBook} books={books}/>
    </>

  )
}