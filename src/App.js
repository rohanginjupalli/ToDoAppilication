import React, { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookEdit from "./Components/BookEdit";
import BookList from "./Components/BookList";
import "./index.css"

function App() {
  const [books,setBooks] = useState([])
  // Adding An Book
  const  createBook =  (title)=>{
    const updatedBook = [...books,{
      id: Math.round(Math.random()*9999),
      title
    }]
    setBooks(updatedBook)
  }
  // Edit An Book By Id
  const editBookById = (id, newTitle) => {
  const updatedBooks = books.map((book) => {
    if (book.id === id) {
      return {
        ...book,
        title: newTitle,
      };
    }
    return book;
  });
  setBooks(updatedBooks); // Pass the updated books array to setBook
};

  // Delete An Book
  function deleteBookById(id){
    const updatedBooks = books.filter((book)=>{
      return book.id !== id 
    })
    setBooks(updatedBooks);
  }


  return (
    <div className="App">
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook}  />
    </div>
  );
}

export default App;
