//
//

import React, { useState } from 'react';
import data from './data';

import List from './List';
import './index.scss';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main className='app1__main'>
      <section className='app__section'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
