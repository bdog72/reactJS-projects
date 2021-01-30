//
//

import React from 'react';

import './practice.scss';

const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I love you to the moon and back',
    author: 'Amelia Hepworth',
  },

  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    title: 'A Promised Land',
    author: 'Barack Obama',
  },
];

const names = ['a', 'b', 'c'];
const newNames = names.map((name) => <h1>{name}</h1>);

function BookList() {
  return <section className='booklist__section'>{newNames}</section>;
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

export default BookList;
