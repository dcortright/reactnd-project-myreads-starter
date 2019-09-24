import React, { Component } from "react";

class BookShelfChanger extends Component {
  /**
   * @description Determines name of shelf book is on.
   * This function is for auto selecting shelf in dropdown
   * to show that a book is already on that shelf.
   * @param {object} book - The book to be displayed
   * @returns {string} name - name of the shelf the book is on.
   */
  getShelfName(book) {
    if (book && book.shelf) {
      return book.shelf;
    } else if (this.props.currentBooks) {
      let currentBooks = this.props.currentBooks;
      let books = currentBooks.wantToRead
        .concat(currentBooks.currentlyReading)
        .concat(currentBooks.read);
      let bookMatches = books.filter(currentBook => currentBook.id === book.id);
      if (bookMatches && bookMatches[0]) {
        return bookMatches[0].shelf;
      }
    }
    return "none";
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={this.getShelfName(this.props.book)}
          onChange={event =>
            this.props.updateBook(event.target.value, this.props.book)
          }
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
