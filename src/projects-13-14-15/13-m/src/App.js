//
//

import React from 'react';
import Navbar from './Navbar';

import Hero from './Hero';
import Sidebar from './Sidebar';

import Submenu from './Submenu';
import { AppProvider } from './context';

import './index.scss';

function App() {
  return (
    <div className='app__13-main-container'>
      <AppProvider>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </AppProvider>
    </div>
  );
}

export default App;
