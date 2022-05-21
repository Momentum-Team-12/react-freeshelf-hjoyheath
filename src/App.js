import { useState } from 'react'
import initialBookState from './bookData'; 
import './App.css';

function Book({ title, author, shortDescription, coverImageUrl, url, publisher, publicationDate, detailedDescription}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpanded = () =>{setIsExpanded(!isExpanded)}
    return (

      <div className="book">
        <h1 className="book-name">{title}</h1>
        <img src={coverImageUrl} alt={title} className="book-image"></img>
        <h2 className="book-author">{author}</h2>
        <p className="book-description">{shortDescription}</p>

        {
          isExpanded ? (
        <>
        <button onClick={handleExpanded}>Less Information</button>
        <p href={url} alt={title} className="book-link"></p>
        <p className="book-publisher">{publisher}</p>
        <p className="publish-date">{publicationDate}</p>
        <p className="book-detail">{detailedDescription}</p>
        </>
         ):(
          <button onClick={handleExpanded}>More Information</button>
         )}
        
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
