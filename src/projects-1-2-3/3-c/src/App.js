//
//
import React from 'react';

import './app.scss';
import Review from './Review';

const App = () => {
  return (
    <div className='app__3-main-container'>
      <main>
        <section className='container'>
          <div className='title'>
            <h2>our reviews</h2>
            <div className='underline'></div>
          </div>
          <Review />
        </section>
      </main>
    </div>
  );
};

export default App;
