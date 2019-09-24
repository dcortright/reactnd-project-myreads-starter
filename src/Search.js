import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class Search extends Component {
  state = {
    bookResults: []
  };

  /**
   * @description Searches for books from search input and sets the state
   * of the Search component's bookResults to be results returned
   * from API.
   * @param {event} event - The event passed from the input
   * @returns {array} bookResults - List of books to be displayed.
   */
  search = event => {
    BooksAPI.search(event.target.value)
      .then(results => {
        if (!results || results.error) {
          this.setState({
            bookResults: []
          });
          return;
        }
        this.setState({
          bookResults: results
        });
      })
      .catch(e => {
        console.log(`Error: ${e}`);
      });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.search(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          {this.state.bookResults.length > 0 && (
            <Shelf
              books={this.state.bookResults}
              currentBooks={this.props.books}
              shelfTitle="Search Results"
              updateBook={this.props.updateBook}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
