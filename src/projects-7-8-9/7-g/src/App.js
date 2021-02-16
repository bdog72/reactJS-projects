/* eslint-disable no-unused-vars */
//
//

import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

import './index.scss';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <div className='app__7-main-container'>
      <h1>Bozo</h1>
    </div>
  );
}

export default App;
