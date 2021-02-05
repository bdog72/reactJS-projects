//
//

import React from 'react';
import Review from './Review';

import './index.scss';

function App() {
  return (
    <div className='app3__main-container'>
      <main>
        <section className='container'>
          <div className='title'>
            <h2>Our Reviews</h2>
            <div className='underline'></div>
          </div>
          <Review />
        </section>
      </main>
    </div>
  );
}

export default App;
