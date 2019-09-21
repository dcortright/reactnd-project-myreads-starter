import React from "react";
import "./App.css";
import BookShelf from "./BookShelf";
import Search from "./Search";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookShelf books={this.state.books}/>} />
        <Route path="/search" render={() => <Search />} />
      </div>
    );
  }
}

export default BooksApp;
