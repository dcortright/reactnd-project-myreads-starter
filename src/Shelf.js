import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  /**
   * @description Retrieves thumbnail URL from book
   * @param {object} book - The book to be displayed
   * @returns {string} url - URL of thumbnail or blank if undefined
   */
  getBookThumbnail(book) {
    if (book.imageLinks && book.imageLinks.thumbnail) {
      return book.imageLinks.thumbnail;
    }
    return "";
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <Book
                key={book.id}
                book={book}
                title={book.title}
                authors={book.authors}
                backgroundImage={this.getBookThumbnail(book)}
                updateBook={this.props.updateBook}
                currentBooks={this.props.currentBooks}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
