import React from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

function BookShelf(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            shelfTitle="Currently Reading"
            books={props.books.currentlyReading}
            updateBook={props.updateBook}
          />
          <Shelf
            shelfTitle="Want to Read"
            books={props.books.wantToRead}
            updateBook={props.updateBook}
          />
          <Shelf
            shelfTitle="Read"
            books={props.books.read}
            updateBook={props.updateBook}
          />
        </div>
        <Link to="/search" className="open-search">
          <div className="open-search">
            <button>Add a book</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BookShelf;
