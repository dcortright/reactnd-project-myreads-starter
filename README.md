# MyReads Project

This is my first project for the Udacity React Course. The goal of this project was to use everything we have learned up to this point in creating an application
that will allow us to create a virtual bookshelf. This bookshelf contains the ability to search for new books, add them to our three shelves and move our current books to
different shelves as well.

The topics covered in this project are:
* State Management
* Routing
* Component Lifecycle

## Running the Application

To start the application:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── Search.js # The page that allows for searching for new books.
    ├── BookShelf.js # This is the component that holds all of the books
    ├── Shelf.js # Each shelf will contain the books that are assigned to it
    ├── Book.js # Each book contains the authors, title and the URL for the thumbnail
    ├── BookShelfChanger.js # The bookShelfChanger is a child component of each book. Giving it the ability to change shelves.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```