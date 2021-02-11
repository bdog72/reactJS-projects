//
//

import React, { useState } from 'react';
import data from './data';

import List from './List';
import './app.scss';
// import './app.css';

function BirthdayReminder() {
  const [people, setPeople] = useState(data);

  return (
    <div className='app__1-main-container'>
      <main>
        <section className='container'>
          <h3>{data.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    </div>
  );
}

export default BirthdayReminder;
