import React from "react";
import "./App.css";
import BookShelf from "./BookShelf";
import Search from "./Search";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    BooksAPI.getAll()
      .then(result => {
        let currentlyReading = result.filter(
          book => book.shelf === "currentlyReading"
        );
        let wantToRead = result.filter(book => book.shelf === "wantToRead");
        let read = result.filter(book => book.shelf === "read");
        this.setState({
          books: {
            currentlyReading: currentlyReading,
            wantToRead: wantToRead,
            read: read
          }
        });
      })
      .catch(e => {
        console.log(`Error: ${e}`);
      });
  }

  updateBook(shelf, book) {
    BooksAPI.update(book, shelf)
      .then(result => {
        var someProperty = { ...this.state.books };
        someProperty[shelf] = result;
        this.setState({ someProperty });
        this.getAllBooks();
      })
      .catch(e => {
        console.log(`Error: ${e}`);
      });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              books={this.state.books}
              updateBook={this.updateBook.bind(this)}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              updateBook={this.updateBook.bind(this)}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
