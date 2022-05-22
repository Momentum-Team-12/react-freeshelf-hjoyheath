import { useState } from "react";
import initialBookState from "./bookData";
import "./App.css";

function Book({
  title,
  author,
  shortDescription,
  coverImageUrl,
  url,
  publisher,
  publicationDate,
  detailedDescription,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="book">
      <div className="book-content">
        <h2 className="book-name">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <p className="book-description">{shortDescription}</p>

        {isExpanded ? (
          <>
            <button onClick={handleExpanded}>Less Information</button>
            <p className="book-publisher">Publisher: {publisher}</p>
            <p className="publish-date">Publication Date: {publicationDate}</p>
            <p className="book-detail">{detailedDescription}</p>
            <p> 
              <a href={url} aria-label="Read more" className="book-link">Read More...</a>
            </p>
          </>
        ) : (
          <button onClick={handleExpanded}>More Information</button>
        )}
      </div>
      <div className="book-image">
        <img src={coverImageUrl} alt={title} />
      </div>
    </div>
  );
}

function App() {
  const [books] = useState(initialBookState);
  return (
    <div className="container">
      <h1>Tech Books to Read</h1>
      {books.map((book) => (
        <Book {...book} key={book.id} />
      ))}
    </div>
  );
}

export default App;
