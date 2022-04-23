import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Book from "./Book";
import "./style.css";

type Props = {
  books: any;
  setBooks: any;
  setTempBooks: any;
};
const API_KEY = "AIzaSyBFGdkpTlaCrmtFpXqBH0RRHQXrUMudYcE";

const titles = [
  "harry potter",
  "captin underpants",
  "the odyssey",
  "the hunger games",
  "the divine comedy of dante alighieri",
];

const Books: React.FC<Props> = props => {
  useEffect(() => {
    const promises = titles.map(titles => {
      return fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          titles
        )}&key=${API_KEY}`)
      .then((res) => res.json())
    });

    Promise.all(promises).then((books: any) => {
      
      const updatedBooks: Book[] = books.map((book: any) => book.items).flat(2).map((book: any) => ({
        title: book.volumeInfo.title,
        image: book.volumeInfo.imageLinks.thumbnail,
        author: book.volumeInfo.authors
      }));
      
      props.setBooks(updatedBooks);
      props.setTempBooks(updatedBooks);
    });
  }, []);

  if (props.books.length === 0) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="books">
      {props.books.map((book: Book) => {
        return (
          <Book
            title={book.title}
            image={book.image}
            author={book.author}
          />
        );
      })}
    </div>
  );
};

export default Books;
