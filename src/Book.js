import React from "react";
import BookShelfChanger from "./BookShelfChanger";

function Book(props) {
  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${props.backgroundImage})`
              }}
            ></div>
            <BookShelfChanger
              updateBook={props.updateBook}
              book={props.book}
              currentBooks={props.currentBooks}
            />
          </div>
          <div className="book-title">{props.title}</div>
          <div className="book-authors">{props.authors}</div>
        </div>
      </li>
    </div>
  );
}

export default Book;
