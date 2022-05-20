import { useState } from 'react'
import initialBookState from './bookData'; 
import './App.css';

function Book({ title, author, shortDescription, coverImageUrl}) {
  return (
      <div className="book">
        <h1 className="book-name">{title}</h1>
        <img src={coverImageUrl} alt={title} className="book-image"></img>
        <h2 className="book-author">{author}</h2>
        <p className="book-description">{shortDescription}</p>
        
      </div>

  )
}

function App() {
  const [books, setBooks] = useState(initialBookState);
  return (
    <div className="container">
         <h1>Books to Read</h1> 
      {books.map((book) => (
        <Book {...book} key={book.id} />
      ))}
    </div>
  );
}


export default App;
