//
//

import React from 'react';
import Book from './Book';

import { books } from './books';
import './practice.scss';

function BookList() {
  return (
    <section className='booklist__section'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

export default BookList;
