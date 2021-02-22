//
//

import React from 'react';
import Modal from './Modal';

import Sidebar from './Sidebar';
import Home from './Home';

import './index.scss';
import { AppProvider } from './context';

function App() {
  return (
    <div className='app__12-main-container'>
      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </div>
  );
}

export default App;
