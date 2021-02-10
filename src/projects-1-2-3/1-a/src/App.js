//
//

import React, { useState } from 'react';
import List from './List';

import data from './data';

// import './app.css';
import './app.scss';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className='app__1-main-container'>
      <main>
        <section className='container'>
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    </div>
  );
}

export default App;
