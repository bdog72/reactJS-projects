//
//

import React from 'react';

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert(`click`);
  };

  const complexExample = (author) => {
    alert(author);
  };

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='book' />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Click
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

export default Book;
