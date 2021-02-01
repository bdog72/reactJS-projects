//
//

import React, { useState } from 'react';
import './birthdayreminder.scss';

import data from './data';
import List from './List';

function BirthdayReminder() {
  const [people, setPeople] = useState(data);

  return (
    <main className='birthdayreminder__main'>
      <section className='birthdayreminder__container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default BirthdayReminder;
