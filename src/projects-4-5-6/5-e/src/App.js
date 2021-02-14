//
//

import React, { useState } from 'react';
import Menu from './Menu';

import Categories from './Categories';
import items from './data';

import './index.scss';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className='app__5-main-container'>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
      ;
    </div>
  );
}

export default App;
